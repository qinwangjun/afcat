function replies(replies={
  data:{},
  loading:true
},action){
  switch(action.type){
    case "REPLIES_LOADING":
      return {
        data:{},
        loading:true
      }
    case "REPLIES_LOAD":
      return {
        data:action.data,
        loading:false
      }
  }
  return replies;
}

export default replies;