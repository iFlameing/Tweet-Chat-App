const initialstate = {
    message:[],
    messagepost:false,
    comment:{},
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
        case "GET_MESSAGE":{
            console.log("this is from reducer",JSON.stringify(action.payload))
            return{
                ...state,comment:action.payload,messagepost:false
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