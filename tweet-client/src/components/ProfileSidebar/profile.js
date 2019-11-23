import React from 'react'
import classes from './profile.css'
import {NavLink} from "react-router-dom"

const Profile = props=>{
    return(
    <div>
        <div className={classes.top}>
        </div>
        <div className={classes.container} >
        <img className={classes.img} src={props.image} alt=""/>
        <h1 className={classes.username}>{props.username}</h1>
        </div>
        <div>
            <h1>Trends For You <span className={classes.span} ><NavLink to='/' style={{textDecoration: "none"}}>Change</NavLink></span></h1>
        <h1><span className={classes.span} >Tweets</span><span className={classes.span}>Following</span><span className={classes.span}>Followers</span></h1>
                <h2><span className={classes.span2} >5</span><span className={classes.span2}>56</span><span className={classes.span2}>10</span></h2>
        </div>
        <div>
            <h2>#India</h2>
            <h2>#IndiaBlue</h2>
            <h2>#BjpIndia</h2>
            <h2>#Shradha Kapoor</h2>
        </div>
    </div>
)}

export default Profile;
