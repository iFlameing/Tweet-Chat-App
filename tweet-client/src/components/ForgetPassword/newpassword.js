import React,{Component} from "react"
import {connect} from 'react-redux'
import {changepassword} from '../../action/index'
import classes from './newpassword.css';

class NewPassword extends Component{
    state={
        password:'',
        confirmpassword:''
    }
    onchange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onsubmit(e){
        e.preventDefault()
        const data={
            userId:this.props.match.params.id,
            password:this.state.password
        }
        this.props.submit(data);
    }

    render(){
        let changepassword= (
            <div>
            <div>
                <form>
                    <div>
                        <input className={classes.input}type="password" name="password" onChange={(event)=>this.onchange(event)} placeholder="NewPassword"/>
                    </div>
                    <div>
                        <input className={classes.input} type="password" name="confirmpassword" placeholder="ConfirmNewPassword"/>
                    </div>
                    <div>
                        <input className={classes.kesh} type="submit" onClick={(event)=>this.onsubmit(event)} value="ChangePassword"/>
                    </div>
                </form>
            </div>
        </div>
        )
        if(this.props.changepassword){
            changepassword=(
                <div>
                    <p>
                        You Successfully changepassword Now Login with your new password.
                    </p>
                </div>
            )
        }
        return changepassword
    }

}

const mapStateToProps = (state)=>({
    changepassword:state.losin.changepassword
})

const mapDispatchToProps=(dispatch)=>({
    submit:(data)=>(dispatch(changepassword(data)))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewPassword);