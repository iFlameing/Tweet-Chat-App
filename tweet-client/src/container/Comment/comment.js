import React,{Component} from 'react'
import {connect} from 'react-redux'
import {postComment} from '../../action/index'
import {withRouter} from 'react-router-dom'
import classes from './comment.css'

class Comment extends Component{
    state={
        value:'Type Your Comment',
        image:''
    }
    onchangeHandler(e){
        this.setState({
            value:e.target.value
        })
    }
    submitHandler(e){
        e.preventDefault();
        const data =new FormData()
        data.append('files',this.state.image)
        data.append('text',this.state.value)
        const url={
            id:this.props.match.params.id,
            userId:this.props.userId,
        }
        console.log(url);        
        this.props.postComment(data,url)
        
        
    }
    imageHandle=(e)=>{
        this.setState({image:e.target.files[0]})
    }
    render(){
        return(
            <div>
                <form className={classes.container}>
                    <div className={classes.first} >
                        <img className={classes.img} src={`http://localhost:8081/${this.props.profileImageUrl}`}/>
                    </div>
                    <div className={classes.second} >
                    <div>
                    <textarea className={classes.textarea} rows="5" value={this.state.value} onChange={(event)=>this.onchangeHandler(event)}  />
                    </div>
                    <div className={classes.labelContainer}>
                    <input id="inputFile" type="file" className={classes.inputfile} onChange={(event)=>this.imageHandle(event)} />
                    <label className={classes.label} for="inputFile"><i class="fa fa-upload" aria-hidden="true"></i>  ChooseFile</label>
                    <input className={classes.submit} type="submit" onClick={(event)=>this.submitHandler(event)} value="Comment" />
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state=> ({
    userId:state.losin.userId,
    profileImageUrl:state.losin.profileImageUrl
})

const mapDispatchToProps = dispatch=>({
    postComment:(data,url)=>dispatch(postComment(data,url)),
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Comment));