import React,{Component} from 'react'
import {connect} from 'react-redux'
import  { signin } from '../action'
import classes from './auth.css'
import {Redirect} from 'react-router-dom'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            email:''
        }
    }
    onsubmithandler(e){
        e.preventDefault();
        const data={
            username:this.state.username,
            password:this.state.password,
            email:this.state.email
        }
        this.props.submit(data);
    }
    onchange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        const redirect = this.props.logout?<Redirect to="/" />:"";
        return (
            <div className={classes.container}>
            {redirect}
                <form className={classes.form} onSubmit={(event)=>this.onsubmithandler(event)}>
                <h1>Login</h1>
                        <div>Email:</div><input className={classes.input} type="text" name='email' onChange={(event)=>this.onchange(event)}/>
                        <div>UserName:</div><input className={classes.input} type="text" name="username" onChange={(event)=> this.onchange(event)} placeholder="Enter your UserName" />    
                <div>Password:</div><input className={classes.input} type="password"  name='password' onChange={(event)=> this.onchange(event)} placeholder="Enter your Password" />
                <div>
                    <input className={classes.submit} type="submit" value="Login"/>

                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    logout:state.losin.logout
})

const mapDispatchToProps = dispatch =>({
    submit:(data)=>(dispatch(signin(data)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);