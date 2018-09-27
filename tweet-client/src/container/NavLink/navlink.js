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
                <NavLink to="/profile">{props.username}</NavLink>
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
             <NavLink to="/" > Home</NavLink>
            </li>
        </div>
        <div className = {classes.item}>
            <li>
                <NavLink  to="/questions">QuestionsOfSmvdu</NavLink>
            </li>
            <li>
                <NavLink  to="/addMessage">Message</NavLink>
            </li>
            <li>
                <NavLink  to="/profile">profile</NavLink>
            </li>
            {nav}
           
        </div>
    </div>
   )
}
export default NavLink1;