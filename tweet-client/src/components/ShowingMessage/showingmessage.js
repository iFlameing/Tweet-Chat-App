import React,{Component} from 'react'
import {connect} from 'react-redux'

class FoundMessage extends Component{

    state={
        image:"",
        text:""
    }

    render(){
        return(<div></div>)
    }
}

const mapStateToProps = state=>({
    image:state.message.image,
    text:state.message.text
})
const mapStateToDispatch= dispatch=>({
    foundmessage:(data)=>dispatch(foundmessage(data))
})

export default connect(mapStateToProps,mapStateToDispatch)(FoundMessage);

