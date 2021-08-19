import React, { PureComponent } from "react";
import {Button,message } from "antd";
import axios from "axios";
import cookie from 'react-cookies';
import withGuards from "../../component/guards";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const { Fragment } = React;

const mapDispatchToProps = (dispatch: Dispatch)=>{
  return {
    changeAvatar: (avatar: string,name: string) => {
      const action= {
        type:"USER_LOAD",
        avatar:avatar,
        userName:name
      };
      dispatch(action);
    }
  }
}


class Head extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      file:'',
      showImg:'none',
      token:cookie.load('token'),
      name:'CoderZb',
      storeId:'91',
      subsidyAmount:'82',
      imagePreviewUrl:(cookie.load('avatar').split('http://10.24.24.64:9999/public/avatar/')[1]=='' || cookie.load('avatar').split('http://10.24.24.64:9999')[1]=='') ? '' : cookie.load('avatar'),
    }
  }
  render() {
    var {imagePreviewUrl,showImg} = this.state;
    var imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = ( <label for="avatarFor">< img style={{width:'80px',height:'80px'}} src={imagePreviewUrl} /></label>);
      showImg = 'none';
    } else {
      showImg = 'inline-block';
    }

    return (
      <div className="avatarPage" align="center">
        <Fragment >
          <div>
               <input id="avatarFor" style={{display:'none'}} type="file" onChange={(e)=>this.handleImageChange(e)}/>
               {imagePreview}
               <label style={{color:"#1890FF",border:"1px dashed #1890FF",padding:'3px 10px ',display:showImg}} for="avatarFor">+点击上传图片</label>
          </div>
          <div>
               <Button
               key="submit"
               type="primary"
               className="avatarBtn"
               onClick={this.chargeFunc}>
               确定{" "}
          </Button>
          </div>
      </Fragment>
      </div>
    );
  }

  
  handleImageChange(e) {
    e.preventDefault();
    
    var reader = new FileReader();
    var file = e.target.files[0];
    
    reader.onloadend = () => {
      this.setState({
      file: file,
      imagePreviewUrl: reader.result
      });
    }
    
    reader.readAsDataURL(file)
  }
  chargeFunc= (e) => { 
    
    let file1 = document.querySelector('#avatarFor').files[0]
    console.log(file1)
    let formdata = new FormData()
    formdata.append("avatar", file1)
    console.log(formdata)
    axios({
      url:'http://10.24.24.64:9999/api/user/avatar',
      method: 'patch',
      headers:{
        'authorization': this.state.token,
        'Content-Type':'multipart/form-data'
      },
      data:formdata
  }).then((res) => {
        if (res.status === 200) {
          let avatar = 'http://10.24.24.64:9999/public/avatar/'+res.data.results;
          cookie.save('avatar',avatar);
          this.props.changeAvatar(avatar,cookie.load('userName'));
          message.info('上传成功',5);
        }
        if (res.status != 200) {
          console.log(res.data.status);
          console.log(res.data.status);
          message.info('上传失败',5);
        }
    }).catch((error) => {
        console.log(error);
		message.info('上传失败',5);
    })
  }
}

export default connect(null,mapDispatchToProps)(withGuards(Head));