const initialstate = {
    message:[],
    messagepost:false
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
        default: {
            return {
              ...state
            }
          }
    }

}

export default messageReducer;