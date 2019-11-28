import React,{Component} from 'react'
import Aux from '../../hoc/aux'
import { connect } from 'react-redux'

import {getParticularMessage} from '../../action/index'
import MessageLoader from '../messages/messages'
import CommentBox from './commentBox'
import classes from './particular.css'


class ParticularMessage extends Component{


    componentDidMount(){
        console.log("this is from componentDidMount")
        console.log(this.props.match.params.id)
        this.props.loadmessage(this.props.match.params.id);
    }

    render(){
        let message=[];
        let particular1= '';
        console.log(this.props.messages)
        if(this.props.messages.comments){
            message = this.props.messages.comments.reverse().filter((v, i) => {
                return i < 10;
            })
            particular1= <MessageLoader name={this.props.messages.userId.username} text={this.props.messages.text} postimage={`http://localhost:8081/${this.props.messages.image}`} img={`http://localhost:8081/${this.props.messages.userId.profileImageUrl}`} />


        }

        let message1;
        let count;
        

        if (message.length !== 0) {
            count++;
            message1 = message.map(mes => (<div key={count.toString()} ><MessageLoader id={mes._id} name={mes.userId.username} text={mes.text} img={`http://localhost:8081/${mes.userId.profileImageUrl}`} /></div>))

        }
        return(
            <div className={classes.particularMessageContainer}>
                <div>{particular1}</div>
                
                <div>
                <CommentBox />
                </div>
                
                <div>
                {message1}
                </div>
                

            </div>
        )
    }




}



const mapStateToProps = state => ({
    messages: state.message.comment,
})

const mapDispatchToProps = (dispatch) => {
    return {
        loadmessage: (id) => dispatch(getParticularMessage(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParticularMessage);