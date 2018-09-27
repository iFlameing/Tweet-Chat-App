import React,{Components} from 'react'

class ErrorBoundary extends Components{
    state={
        hasError:flase,
        error:''
    }

    componentDidCatch=(error,info)=>{
        this.setState({hasError:true,error:error})
    }

    render(){
        if(this.state.hasError){
            return <h1>{this.state.error}</h1>
        }
        else{
            return this.props.childern;
        }
    }



}

export default ErrorBoundary;