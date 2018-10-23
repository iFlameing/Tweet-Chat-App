import React from 'react'
import classes from './messages.css'
import Aux from '../../hoc/aux'

const UserMessage = props => {
    
    return(
        <div className={classes.container}>
            <Aux>
                <div className={classes.usermessage} >
                <div className={classes.first}>
                    <img className={classes.img1} src={props.img} alt="imagelink"/>  
                </div>
                <div className={classes.second}>
                    <h1>{props.name}{`@${props.name}`}</h1>
                    <p>{props.text}</p>
                    <img className={classes.img2} src={props.postimage} alt="" />
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Message</button>
                </div>     
                </div>
            </Aux>
        </div>
        
            
    



    )}

export default UserMessage;