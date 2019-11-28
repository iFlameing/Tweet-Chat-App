import React from 'react'
import classes from './messages.css'
import Aux from '../../hoc/aux'
import {NavLink} from 'react-router-dom'


const UserMessage = props => {
    
    return(
        <div className={classes.container}>
            <Aux>
                <div className={classes.usermessage} >
                <div className={classes.first}>
    {props.img?<img className={classes.img1} src={props.img} alt="imagelink"/>:null}  
                </div>
                <div className={classes.second}>
                    <h1>{props.name}{`@${props.name}`}</h1>
                    <p>{props.text}</p>
                    {props.postimage?<img className={classes.img2} src={props.postimage} alt="" />:null}
                    <button>Like</button>
                    <NavLink to={`api/messages/${props.id}/messages`}><button>Comment</button></NavLink>
                    
                    <button>Message</button>
                </div>     
                </div>
            </Aux>
        </div>
        
            
    



    )}

export default UserMessage;