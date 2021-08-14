import React, { PureComponent } from "react";
import {Button} from "antd";
import axios from "axios";
const { Fragment } = React;

class Head extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      file:'',
      showImg:'none',
      token:'jianshu',
      name:'CoderZb',
      
storeId:'91',
      subsidyAmount:'82',
      imagePreviewUrl:'',
    }
  }
  render() {
    var {imagePreviewUrl,showImg} = this.state;
    var imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = ( <label  for="avatarFor">< img style={{width:'80px',height:'80px'}} src={imagePreviewUrl} /></label>);
      showImg = 'none';
    } else {
      showImg = 'block';
    }

    return (
      <div  align="center">
        <Fragment >
          <tr>
               <input id="avatarFor" style={{display:'none'}} type="file" onChange={(e)=>this.handleImageChange(e)}/>
               {imagePreview}
               <label style={{color:"#1890FF",border:"1px dashed #1890FF",padding:'3px 10px ',display:showImg}} for="avatarFor">+点击上传图片</label>
          </tr>
          <tr>
               <Button
               key="submit"
               type="primary"
               onClick={this.chargeFunc}>
               确定{" "}
          </Button>
          </tr>
      </Fragment>
      </div>
    );
  }

  
 handleImageChange(e) {
    e.preventDefault();
    
    var reader = new FileReader();
    var file = e.target.files[0];
    
    reader.onloadend = () => {
      console.log('文件名为—',file);
      console.log('文件结果为—',reader.result);
      this.setState({
      file: file,
      imagePreviewUrl: reader.result
      });
    }
    
    reader.readAsDataURL(file)
  }
  chargeFunc= (e) => { 
//     console.log("file为",this.state.file);
//       const formData = new FormData();
//       console.log("one------");
//       formData.append('filename', this.state.file)
//       formData.append('token',this.state.token);
//       formData.append('userName',this.state.name);
//       formData.append('storeId',this.state.storeId);
//       formData.append('chargeMoney',this.state.subsidyAmount);
//       let config = {
//         method: 'post',
//         headers:{'Content-Type': 'multipart/form-data'}
//       }
//       axios.post(saveStoreZeroCharge,formData,config).then((res) => {
//         if (res.data.status === 200) {

//             // this.getStoreInfo();
//         }
//         if (res.data.status != 200) {

//             return false;
//         }
//     }).catch((error) => {
//         console.log(error);
//     })
  }
}

export default Head;