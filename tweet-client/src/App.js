import React, { Component } from 'react';
import Login from './container/Login/LoginPage';
import Signup from './container/Signup/Signup';
import Logout from './container/Logout/logout'
import Message from './container/message/message'
import Navlink from './container/NavLink/navlink'
import AddMessage from './container/message/addmessage'
import {Switch,Route,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
      <Navlink  logout={this.props.logout} username={this.props.username}/>
      <Switch>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/Login"  component={Login}/>
        <Route exact path="/addMessage" component={AddMessage}/>
        <Route  exact path="/logout"   component={Logout}/>
        <Route path="/"       component={Message}/>
      </Switch>
      </div>
    );
  }
}

const mapStateToProps = state=>({
  logout:state.losin.logout,
  username:state.losin.userName
})



export default withRouter(connect(mapStateToProps,null)(App));
