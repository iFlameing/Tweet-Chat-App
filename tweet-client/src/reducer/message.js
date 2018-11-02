const initialstate = {
    message:[],
    messagepost:false,
    foundmessage:"",
}

const messageReducer =(state=initialstate,action)=>{
    switch(action.type){
        case "message":{
            return{
                ...state,message:action.payload,messagepost:false
            }
        }
        case "addmessage":{

            return{
                ...state,messagepost:true
            }
        }
        case "FOUND":{
            return{
                ...state,foundmessage:action.payload,
            }
        }
        default: {
            return {
              ...state
            }
          }
    }

}

export default messageReducer;