import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, combineReducers} from 'redux';
import{BrowserRouter} from 'react-router-dom'
import rootReducer from '../src/reducer/rootReducer'
import Message from '../src/reducer/message'
import comment from '../src/reducer/comment'
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import {autoUser} from './action/index'
import registerServiceWorker from './registerServiceWorker';
const commonreducer = combineReducers({
    losin:rootReducer,
    message:Message,
    comment:comment,
})
const store=createStore(commonreducer,applyMiddleware(thunk));

const getCurrentUser=()=>{
    const token1 = localStorage.getItem('user-for-tweetApp')
    let user1  = localStorage.getItem('user-for-tweetApp')
    user1=JSON.parse(user1)
    return {
        token:token1,user:user1
    }
}

let user = getCurrentUser()
if(user.token){
store.dispatch(autoUser(user))
}

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
