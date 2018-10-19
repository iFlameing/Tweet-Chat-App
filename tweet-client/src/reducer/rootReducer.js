
const defalut_state={
    logout:false,
    userId:'',
    userName:'',
    email:false,
    changepassword:false,
}
const createUser = (user)=>{
    localStorage.setItem("user-for-tweetApp",JSON.stringify(user))
} ;
const removeUser = ()=>{
    localStorage.removeItem('user-for-tweetApp');
}
const rootReducer = (state =defalut_state,action)=>{
    switch(action.type){
        case "signUp": console.log(action.payload); createUser(action.payload.users); return {...state,logout:true,userId:action.payload.users.userId ,userName:action.payload.users.username,};
        case 'logout': removeUser(); return {...state,logout:false};
        case 'auto': return{...state,userId:action.payload.users.userId,userName:action.payload.users.username,logout:true}
        case  'email':return{...state,email:true};
        case 'passwordchange':return{...state,changepassword:true};
        default: {
            return {
              ...state
            }
          }
    }
}

export default rootReducer;