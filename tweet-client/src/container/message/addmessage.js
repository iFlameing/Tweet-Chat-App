import React,{Component} from 'react'
import {connect} from 'react-redux'
import { postnewmessage} from '../../action/index'
import classes from './add.message.css'
import {Redirect} from "react-router-dom"

class AddMessage extends Component{

    state={
        text:'',
        image:""
    }


    submitHandler(e){
        e.preventDefault();
        alert("submit handler is making this sound")

        const data =new FormData()
        data.append('files',this.state.image)
        data.append('text',this.state.text)
        const userId={
            userId:this.props.userId
        }
        this.props.addmessage(data,userId);
    }

    onchangehandler(event){
        this.setState({
            text:event.target.value
        })
    }
    imageHandle=(e)=>{
        this.setState({image:e.target.files[0]})
    }



    render(){
        let redirect=""
        if(this.props.redirect){
             redirect= <Redirect to="/" />
        }
        return(
            <div className={classes.form} >

            {redirect}
            <div className={classes.formContainer1}>                <form className={classes.formContainer} onSubmit={(event)=>this.submitHandler(event)}>
                    <div className={classes.item}>Enter The Message</div>
                    <textarea  onChange={(event)=>this.onchangehandler(event)} cols={40} rows={10}  />
                    <input className={classes.inputfile} type="file" id="file" onChange={this.imageHandle} />
                    <label for="file" className= {classes.label}><i class="fa fa-upload" aria-hidden="true"></i>  Choose Image file....</label>
                            <input className={classes.submit} type="submit" value="Submit" />

                        
                </form>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state=>({
    userId:state.losin.userId,
    redirect:state.message.messagepost
})

const mapStateToDispatch=dispatch=>({
    addmessage:(data,userId)=>{ console.log(data); return dispatch(postnewmessage(data,userId))}
})

export default connect(mapStateToProps,mapStateToDispatch)(AddMessage);