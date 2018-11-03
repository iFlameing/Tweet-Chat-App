import React from 'react'
import classes from './navlink.css'
import {NavLink} from 'react-router-dom'

const NavLink1 = (props)=>{
        let nav=[
        <li>
            <NavLink to="/signup">SignUp</NavLink>
        </li>,
        <li>
            <NavLink to="/Login">Login</NavLink>
        </li>
        ]
        if(props.logout){
            nav=[
            <li >
                <NavLink to="/profile"><img className={classes.image} src={props.image} alt="profileImage" /></NavLink>
            </li>,
            <li>
                <NavLink to="/logout">Logout</NavLink>
            </li>
            ]
        }
   return(
    <div className ={classes.Navlink} >
        <div className={classes.brand}>
            <li>
             <NavLink to="/" ><i class="fa fa-home" aria-hidden="true"></i>
                 Home</NavLink>
            </li>
        </div>
        <div className = {classes.item}>
            {/* <li>
                I have to implement this after the complementaion of basis tweet-app.
                <NavLink  to="/questions">QuestionsOfSmvdu</NavLink>
            </li> */}
            <li>
                <NavLink  to="/addMessage">Tweet</NavLink>
            </li>
            {nav}
           
        </div>
    </div>
   )
}
export default NavLink1;