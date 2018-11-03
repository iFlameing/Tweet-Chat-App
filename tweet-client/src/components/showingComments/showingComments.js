import React from 'react'
import classes from './showingComments.css'

const showingComment = props=>(
        <div className={classes.container}>
        
        <div className={classes.usermessage} >
            <div className={classes.first}>
                <img className={classes.img1} src={props.img} alt="imagelink"/>  
            </div>
            <div className={classes.second}>
                <h1>{props.name}{`@${props.name}`}</h1>
                <p>{props.text}</p>
                <img className={classes.img2} src={props.postimage} alt="" />
            </div>
        </div>
    </div>
)

export default showingComment;