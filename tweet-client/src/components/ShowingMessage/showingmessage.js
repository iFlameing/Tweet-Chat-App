import React,{Component} from 'react'
import {connect} from 'react-redux'
import MessageLoader from '../../container/messages/messages'
import {foundmessage} from '../../action/index'
import classes from './showingMessage.css'
import Comment from '../../container/Comment/comment'
import ShowingComment from '../showingComments/showingComments'
import MessageLoader1 from '../../container/messages/messages'
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
        let showingcomment=''
        if(this.props.comment){
            showingcomment=(
            <div>
            <div className={classes.container}>
            <div className={classes.first1}></div>
            <div className={classes.showcomment1}>
            <MessageLoader1
                name={this.props.comment.author.username}
                text={this.props.comment.text}
                postimage={`http://localhost:8081/${this.props.comment.image}`}
                img={`http://localhost:8081/${this.props.comment.author.profileImageUrl}`}
                /></div>
            <div className={classes.second1}></div>

            </div>
            <div>
                {/* <ShowingComment
                name={this.props.comment.author.username}
                text={this.props.comment.text}
                postimage={`http://localhost:8081/${this.props.comment.image}`}
                img={`http://localhost:8081/${this.props.comment.author.profileImageUrl}`}
                /> */}

            </div>
            </div>)
        }
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
                        <Comment/>
                    </div>
                    </div>
            </div>
           
            </div>
            <div  className={classes.flex2}></div>
            </div>)
        }
        
        return(
        <div>
            {f}
            {showingcomment}
        </div>
        )
    }
}

const mapStateToProps = state=>({
    mes:state.message.foundmessage,
    comment:state.comment.comments,
})
const mapStateToDispatch= dispatch=>({
    find:(data)=>dispatch(foundmessage(data))
})

export default connect(mapStateToProps,mapStateToDispatch)(FoundMessage);

