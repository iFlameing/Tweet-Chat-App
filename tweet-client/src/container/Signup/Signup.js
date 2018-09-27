import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signup} from '../../action'
import classes from './auth.css'
import {Redirect} from 'react-router-dom'
import {Link} from "react-router-dom"

class SignUP extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            username:'',
            password:'',
            imageurl:'',
        }
    }
    handleOnsubmit(e){
        e.preventDefault();
        const data =new FormData()
        data.append('files',this.state.imageurl)
        data.append('email',this.state.email)
        data.append('username',this.state.username)
        data.append('password',this.state.password)
        
        this.props.submit(data)
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    onchangeHandler=(e)=>{
        console.log(e.target.files[0]);
        this.setState({imageurl:e.target.files[0]})
    }

    render(){
        const redirect = this.props.logout?<Redirect to="/"/>:"";
        return (
            <div className={classes.container}>
            {redirect}
                <div>
                    <div>
                        <form className={classes.form} onSubmit={(event)=> this.handleOnsubmit(event)}>
                            <div  className={classes.item} >
                                    <div>
                                        <input className={classes.input} type="text" onChange={this.handleChange.bind(this)} name="email" placeholder="Please type your email!" value={this.state.email}/>
                                    </div>
                              
                                    <div>
                                        <input className={classes.input} type="text" name="username" onChange={(event)=> this.handleChange(event)}  placeholder="Please type your UserName" value={this.state.username}/>
                                    </div>
                               
                                    <div>
                                        <input className={classes.input} type="password"  name="password" onChange={(event)=> this.handleChange(event)}  placeholder="Please type your Password"/>
                                    </div>
                                    <div>
                                        <input type="file" onChange={this.onchangeHandler} />
                                    </div>
                                <div>
                                    <input className={classes.submit} type="submit" value="SignUP"/>
                                </div>  
                                <span className = {classes.signup}>Already Registered</span><span className = {classes.signup} ><Link  to="/Login">Login</Link></span> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    logout:state.losin.logout
})

const mapdispatchtoprops = dispatch=>({
    submit:(authdata)=>{return dispatch(signup(authdata))}
})

export default connect(mapStateToProps,mapdispatchtoprops)(SignUP);