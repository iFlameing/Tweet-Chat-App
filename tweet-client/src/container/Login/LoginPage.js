import React,{Component} from 'react'
import {connect} from 'react-redux'
import  { signin } from '../../action'
import classes from './auth.css'
import {Redirect,withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            controls:{
                username:{
                    text:"",
                    validiation:{
                        required:true,
                    },
                    valid:false
                },
                password:{
                    text:"",
                    validiation:{
                        required:true,
                    },
                    valid:false
                },
                email:{
                    text:'',
                    validiation:{
                        required:true,
                        isEmail:true
                    },
                    valid:false
                }
            },
            formisvalid:false

        }
    }
    onsubmithandler(e){
        e.preventDefault();
        const data={
            username:this.state.controls.username.text,
            password:this.state.controls.password.text,
            email:this.state.controls.email.text
        }
        console.log(data);
        this.props.submit(data);
    }
    checkvalidity(value,rules){
        let isValid=true;
        if(rules){
            if(rules.required){
                isValid=value.trim()!==''&& isValid
            }
            if ( rules.isEmail ) {
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                isValid = pattern.test( value ) && isValid
            }
        
        }
        
        return isValid;
}
    onchange(e){
        const change = {
            ...this.state.controls
        }
        const updatechange={
            ...change[e.target.name]
        }
        updatechange.text=e.target.value
        updatechange.valid=this.checkvalidity(updatechange.text,updatechange.validiation)
        change[e.target.name]=updatechange

        let formIsValid=true;

        for(let key in change){  
            formIsValid=change[key].valid && formIsValid
        }
        this.setState({
            controls:change,
            formisvalid:formIsValid
        })
    }
    render(){
        const redirect = this.props.logout?<Redirect to="/" />:"";
        let submit=(<button disabled >Login</button>)
        if(this.state.formisvalid){
            submit=( <input className={classes.submit} type="submit" value="Login"/>)
           
        }
        return (
            <div className={classes.container}>
            {redirect}
                <form className={classes.form} onSubmit={(event)=>this.onsubmithandler(event)}>
                    <div className={classes.item}>
                        <div>
                            <input className={classes.input} type="text" name='email' onChange={(event)=>this.onchange(event)}  placeholder="Enter your email"/>

                        </div>
                        <div>
                            <input className={classes.input} type="text" name="username" onChange={(event)=> this.onchange(event)} placeholder="Enter your UserName" />

                        </div>
                        <div>
                            <input className={classes.input} type="password"  name='password' onChange={(event)=> this.onchange(event)} placeholder="Enter your Password" /> 
                        </div>
                        <div>
                            {submit}
                        </div>
                        <span  className = {classes.signup}></span><span className = {classes.signup} ><Link to="/resetpassword" >forgetpassword</Link></span> 
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));