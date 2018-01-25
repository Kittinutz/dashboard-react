import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//set redux
// import {Provider}from "react-redux";
// import {createStore,combineReducers} from "redux"; 

//node js server 
// import io from 'socket.io-client';

//topcss
import './vendor/css/top.css';
import './vendor/css/Inside.css';
import './vendor/css/sb-admin.css';


// for second css
import './vendor/bootstrap4/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

// const socket = io.connect('localhost:4000');

ReactDOM.render(
  
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
