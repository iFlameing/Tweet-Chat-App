import React from 'react'
import classes from './messages.css'

const UserMessage = props => {
    
    return(
        <div className={classes.container} >
            <div className={classes.usermessage} >
                <div className={classes.img} >
                    <img className={classes.img1} src={props.img} alt="imagelink"/>  
                </div>
                <div>
                    <h1>{`@${props.name}`}</h1>
                    <p>{props.text}</p>  
                </div>
            </div>
        </div>  
    )}

export default UserMessage;