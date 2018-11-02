import React from 'react'
import classes from './messages.css'
import Aux from '../../hoc/aux'
import {NavLink} from 'react-router-dom'

const UserMessage = props => {
    let like= classes.button
    if(props.likeClicked){
        like=[classes.button,classes.liked].join(" ")
    }
    
    return(
        <Aux>
            <NavLink  className={classes.NavLink} to ={`/foundmessage/${props.imageId}`}>
        <div className={classes.container}>
           
                <div className={classes.usermessage} >
                <div className={classes.first}>
                    <img className={classes.img1} src={props.img} alt="imagelink"/>  
                </div>
                <div className={classes.second}>
                    <h1>{props.name}{`@${props.name}`}</h1>
                    <p>{props.text}</p>
                    <img className={classes.img2} src={props.postimage} alt="" />
                    <button  onClick={(event)=>props.like(event)} className={like}><i class="icon-a  fa fa-heart-o fa-1x " aria-hidden="true"></i>
                    </button>
                    <button className={classes.button}><i class="fa fa-comments fa-1x" aria-hidden="true"></i>
                    </button>
                    <button className={classes.button}><i class="fa fa-envelope fa-1x" aria-hidden="true"></i>
                    </button>
                </div>     
                </div>
        </div>
        </NavLink>
        </Aux>
        
            
    



    )}

export default UserMessage;