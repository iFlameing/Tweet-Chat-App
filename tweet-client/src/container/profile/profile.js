import React,{Component} from 'react'
import classes from './profile.css';

class Profile extends Component{

    state={
        file:''
    }


    onchangeHandler=(e)=>{
        console.log(e.target.files[0]);
        this.setState({file:e.target.files[0]})
    }
    fileSubmit=()=>{
        console.log(this.state.text)
    }

    render(){
        return(
            <div className={classes.profile_button}>
                <input type="file" onChange={this.onchangeHandler} className={classes.upload} />
                <button onClick={this.fileSubmit} className={classes.upload}>Upload</button>
            </div>
        )
    }
}


export default Profile;