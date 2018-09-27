import React from 'react'

const Question =(props)=>{
    return (<div>
        <button  onClick={props.clicked}>{props.name}</button>
    </div>)
}

export default Question;