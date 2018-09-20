import React,{Component}  from 'react'
import {Redirect} from 'react-router-dom';
import {Logout} from '../../action/index'
import {connect} from 'react-redux'

class Logout1 extends Component{
    componentDidMount(){
        this.props.logout()
    }

    render(){
        return(
            <div>
                <Redirect to="/"/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=>({
    logout:()=>dispatch(Logout())
})

export default connect(null,mapDispatchToProps)(Logout1);