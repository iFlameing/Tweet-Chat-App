import React from 'react'
import classes from './messages.css'

const UserMessage = props => {
    
    return(
        <div className={classes.container} >
            <div className={classes.usermessage} >
                <div>
                    <img className={classes.img} src={props.img} alt="asd"/>
                </div>
                <div className={classes.item}>
                    <h1>{props.name}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>  
    )}

export default UserMessage;