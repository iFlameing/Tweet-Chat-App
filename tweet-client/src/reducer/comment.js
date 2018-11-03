const default_state = {
    comments:'',
}

const Comment =(state=default_state,action)=>{
    switch(action.type){
        case "POSTCOMMENT": console.log("This is from comment reducer");return {...state,comments:action.payload};
        default:{
            return{
                ...state
            }
        }
    }
}

export default Comment;