import cookie from 'react-cookies';
function user(user={
  userName:cookie.load('userName') || "",
  avatar:cookie.load('avatar') || ""
},action){
  switch(action.type){
    case "USER_LOAD":
      return {
        userName:action.userName,
        avatar:action.avatar
      }
  }
  return user;
}

export default user;