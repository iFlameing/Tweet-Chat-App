import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message } from '../../action/index';
import MessageLoader from '../messages/messages';
import classes from './message.css';
import Aux from '../../hoc/aux';
import { NavLink } from "react-router-dom";
import Profile from '../../components/ProfileSidebar/profile';
import SplitPane, { Pane } from 'react-split-pane';


class Message extends Component {

    componentDidMount() {
        this.props.loadmessage();
    }
    render() {
        const message = this.props.messages.reverse().filter((v, i) => {
            return i < 10;
        })
        console.log(message);
        let user = JSON.parse(localStorage.getItem('user-for-tweetApp'))
        let image = ''
        if (user) {
            image = `http://localhost:8081/${user.profileImageUrl}`
        }
        let message1 = "";
        let count = 0;
        if (message.length !== 0) {
            count++;
            message1 = message.map(mes => (<div key={count.toString()} ><MessageLoader name={mes.userId.username} text={mes.text} postimage={`http://localhost:8081/${mes.image}`} img={`http://localhost:8081/${mes.userId.profileImageUrl}`} /></div>))
        }

        return (
            <div className={classes.container}>
                <Aux>
                    <div className={classes.first}>
                        <Profile image={image} username={this.props.username} /></div>
                    <div className={classes.message} >
                        {message1}
                    </div>

                    <div className={classes.second}>
                        <h1 className={classes.Who_to_follow}>Who To Follow</h1>
                        <span className={classes.span}><NavLink to="/" style={{textDecoration: "none"}}>Refresh</NavLink></span> <span className={classes.span}><NavLink to="/" style={{textDecoration: "none"}}>ViewAll</NavLink></span>
                        <p>This website is madeup by Alok Kumar just for the learning purpose and how
                            the new technology is evolving . I have to implement more and more feature so that
                            I learn the new technology very fast.
                    </p>
                    </div>

                </Aux>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.message.message,
    username: state.losin.userName
})

const mapDispatchToProps = (dispatch) => {
    return {
        loadmessage: () => dispatch(message()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);