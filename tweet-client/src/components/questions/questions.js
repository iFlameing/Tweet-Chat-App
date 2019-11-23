import React from 'react'
import classes from './questions.css';
const Question =(props)=>{
    return (<div>
        <button  onClick={props.clicked} className={classes.ques}>{props.name}</button>
    </div>)
}

export default Question;