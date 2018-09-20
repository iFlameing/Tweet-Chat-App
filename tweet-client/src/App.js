import React, { Component } from 'react';
import Login from './components/LoginPage';
import Signup from './components/Signup';
import Logout from './components/Logout/logout'
import Message from './components/message/message'
import Navlink from './components/NavLink/navlink'
import AddMessage from './components/message/addmessage'
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
