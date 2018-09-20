
const defalut_state={
    logout:false,
    userId:'',
    userName:''
}
const createUser = (token,user)=>{
    localStorage.setItem("token",token)
    localStorage.setItem("user",JSON.stringify(user))
} ;
const removeUser = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}
const rootReducer = (state =defalut_state,action)=>{
    switch(action.type){
        case "signUp": console.log(action.payload); createUser(action.payload.token,action.payload.users); return {...state,logout:true,userId:action.payload.users.userId ,userName:action.payload.users.username,};
        case 'logout': removeUser(); return {...state,logout:false};
        case 'auto': return{...state,userId:action.payload.users.userId,userName:action.payload.users.username,logout:true}
        default: {
            return {
              ...state
            }
          }
    }
}

export default rootReducer;