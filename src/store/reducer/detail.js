function detail(detail={
  data:[],
  loading:true
},action){
  switch(action.type){
    case "DETAILS_LOADING":
      return {
        data:[],
        loading:true
      }
    case "DETAILS_LOAD":
      return {
        data:action.data,
        loading:false
      }

  }
  return detail;
}

export default detail