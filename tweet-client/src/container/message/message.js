import React,{Component} from 'react'
import {connect} from 'react-redux'
import {message} from '../../action/index'
import MessageLoader from '../messages/messages'
import classes from './message.css'


class Message extends Component{

    componentDidMount(){
        this.props.loadmessage();
    }
    render(){
        const message = this.props.messages.filter((v,i)=> i<10)
        let message1="";
        if(message.length!==0){
         message1 =  message.map(mes=>( <MessageLoader name={mes.userId.username} text={mes.text} img={mes.userId.profileImageUrl} />))
        }
        return(
            <div className={classes.container}>
                <div className={classes.message} >{message1}</div>
            </div>
        )}
}

const mapStateToProps = state=>({
    messages:state.message.message
})

const mapDispatchToProps =(dispatch)=>{
    return{
        loadmessage:()=>dispatch(message()),   
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Message);