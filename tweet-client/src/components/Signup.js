import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signup} from '../action'
import classes from './auth.css'
import {Redirect} from 'react-router-dom'

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
        const data={
            email:this.state.email,
            username:this.state.username,
            password:this.state.password,
            profileImageUrl:this.state.imageurl
        }
        this.props.submit(data)
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    render(){
        const redirect = this.props.logout?<Redirect to="/"/>:"";
        return (
            <div className={classes.container}>
            {redirect}
                <div>
                    <div>
                        <form className={classes.form} onSubmit={(event)=> this.handleOnsubmit(event)}>
                            <div >
                            <h1>SignUP</h1>
                                    <div>Email</div>
                                    <input className={classes.input} type="text" onChange={this.handleChange.bind(this)} name="email" placeholder="Please type your email!" value={this.state.email}/>
                              
                                    <div>UserName</div>
                                    <input className={classes.input} type="text" name="username" onChange={(event)=> this.handleChange(event)}  placeholder="Please type your UserName" value={this.state.username}/>
                               
                                    <div>Password</div>
                                    <input className={classes.input} type="password"  name="password" onChange={(event)=> this.handleChange(event)}  placeholder="Please type your Password"/>
                                
                                    <div>Image Url</div>
                                    <input className={classes.input} type="text" name='imageurl' onChange={(event)=> this.handleChange(event)}  placeholder="Please give your profileImg link" value={this.state.imageurl}/>
                                <div>
                                    <input className={classes.submit} type="submit" value="SignUP"/>

                                </div>  
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