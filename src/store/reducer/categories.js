function categories(categories={
  data:[],
  loading:true
},action){
  switch(action.type){
    case "CATES_LOADING":
      return {
        data:[],
        loading:true
      }
    case "CATES_LOAD":
      return {
        data:action.data,
        loading:false
      }
  }
  return categories;
}

export default categories;