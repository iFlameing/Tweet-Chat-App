import React,{Component} from 'react'
import {connect} from 'react-redux'
import MessageLoader from '../../container/messages/messages'
import {foundmessage} from '../../action/index'
import classes from './showingMessage.css'

class FoundMessage extends Component{

    componentDidMount(){
        console.log("This is from componentDidUpdate")
        let token="";
        let userId="";
        let user=""
        if(localStorage.getItem('user-for-tweetApp')){
             user = JSON.parse(localStorage.getItem('user-for-tweetApp'));
             userId=user.userId
             token=user.token
        }
        const data = {
            token:token,
            userId:userId,
            imageId:this.props.match.params.id
        }
        this.props.find(data);
    }

    state={
        image:"",
        text:""
    }

    render(){
        let f= ""
        let image=""
        if(this.props.mes){

            f=(
            <div className={classes.container1}>
            <div className={classes.flex1}></div>
            <div className={classes.flex3}>
            <div className={classes.container}>
                    <div className={classes.usermessage} >
                    <div className={classes.first}>
                        <img className={classes.img1} src={`http://localhost:8081/${this.props.mes.userId.profileImageUrl}`}/>
                    </div>
                    
                    <div className={classes.second}>
                        <h1>{this.props.mes.userId.username}{`@${this.props.mes.userId.username}`}</h1>
                        <p>{this.props.mes.text}</p>
                        <img className={classes.img2} src={`http://localhost:8081/${this.props.mes.image}`} /> 
                    </div>
                    </div>
            </div></div>
            <div  className={classes.flex2}></div>
            </div>)
        }
        
        return(<div>

              {f}
        </div>)
    }
}

const mapStateToProps = state=>({
    mes:state.message.foundmessage,
})
const mapStateToDispatch= dispatch=>({
    find:(data)=>dispatch(foundmessage(data))
})

export default connect(mapStateToProps,mapStateToDispatch)(FoundMessage);

