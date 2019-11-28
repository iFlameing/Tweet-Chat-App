import React, {Component} from "react"
import classes from './comment.css'



class Comment extends Component{
    state={
        value:""
    }

    handleChange(event){
        this.setState({value: event.target.value});

    }


    render(){
        return(<div className={classes.commentContainer}>
            <textarea value={this.state.value} rows="10" onChange={this.handleChange.bind(this)}/>
            <button>Comment</button>
        </div>)
    }
}

export default Comment;