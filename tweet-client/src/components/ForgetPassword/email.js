import React,{Component} from 'react'
import {connect} from 'react-redux'
import {resetpassword} from "../../action"

class  ResetForm  extends Component{

    state={
        email:''
    }

    onchange(e){
        this.setState({
            email:e.target.value
        })
    }
    submitHandler(e){
        e.preventDefault();
        const data ={
            email:this.state.email
        }
        alert(data);
        this.props.submit(data);
    }

    render(){
        var email=(
            <div>
            <div>
                <form>
                    <div>
                        <label>Email</label>
                        <input type="email"  onChange={(event)=> this.onchange(event)}  placeholder="Enter your registered Email"/> 
                    </div>
                    <div>
                        <input type="submit" onClick={(event)=>this.submitHandler(event)} value="Submit"/>
                    </div>
                </form>
            </div>
        </div>

        )
        if(this.props.email){
            email=(
                <div>
                    <p>Please Check Your Email for Changing Password</p>
                </div>
            )
        }
        return email;
    }

}
const mapStateToProps = (state)=>({
    email:state.losin.email
})

const mapDispatchToProps =(dispatch)=>({
    submit:(data)=> (dispatch(resetpassword(data)))
})

export default connect(mapStateToProps,mapDispatchToProps)(ResetForm);