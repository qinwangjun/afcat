function detail(detail={
  data:[],
  loading:true
},action){
  switch(action.type){
    case "DETAIL_LOADING":
      return {
        data:[],
        loading:true
      }
    case "DETAIL_LOAD":
      return {
        data:{
          ...action.data,
          viewCount:action.data.viewCount + 1
        },
        loading:false
      }

  }
  return detail;
}

export default detail