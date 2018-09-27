import React,{Component} from 'react'

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
            <div>
                <input type="file" onChange={this.onchangeHandler} />
                <button onClick={this.fileSubmit}>Upload</button>
            </div>
        )
    }
}


export default Profile;