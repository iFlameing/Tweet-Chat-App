import React,{Component} from 'react'
import {connect} from 'react-redux'
import { postnewmessage} from '../../action/index'
import classes from './add.message.css'
import {Redirect} from "react-router-dom"

class AddMessage extends Component{

    state={
        text:''
    }


    submitHandler(e){
        e.preventDefault();
        const data ={
            userId:this.props.userId,
            text:this.state.text
        }
        this.props.addmessage(data);
    }

    onchangehandler(event){
        this.setState({
            text:event.target.value
        })
    }



    render(){
        let redirect=""
        if(this.props.redirect){
             redirect= <Redirect to="/" />
        }
        return(
            <div className={classes.form} >
            {redirect}
                <form onSubmit={(event)=>this.submitHandler(event)}>
                    <div className={classes.item}>Enter The Message</div>
                    <textarea  onChange={(event)=>this.onchangehandler(event)} cols={40} rows={10}  />
                            <input className={classes.submit} type="submit" value="Submit" />     
                        
                </form>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    userId:state.losin.userId,
    redirect:state.message.messagepost
})

const mapStateToDispatch=dispatch=>({
    addmessage:(data)=>{ console.log(data); return dispatch(postnewmessage(data))}
})

export default connect(mapStateToProps,mapStateToDispatch)(AddMessage);