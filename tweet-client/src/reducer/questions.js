initialstate ={
        sem:{
            minor1:[],
            minor2:[],
            major:[]
        }
    }

const Questions =(state=initialstate,action)=>{
    switch(action.type){
        case "minor1":
         return({
             ...state,
             sem:{
                ...state.sem,
                minor1:action.payload,
             }
        })

        case "minor2":
         return({
             ...state,
             sem:{
                ...state.sem,
                minor1:action.payload,
             }
        })
        case "major":
         return({
             ...state,
             sem:{
                ...state.sem,
                minor1:action.payload,
             }
        })
        default: {
            return state;
        }
    }

}