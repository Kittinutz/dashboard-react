import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import {startLaravelDuskTest} from './components/startLaravelDuskTest';
// import {socket} from './components/socketIO';
//topcss
import './vendor/css/top.css';
import './vendor/css/Inside.css';
import './vendor/css/sb-admin.css';
// for second css
import './vendor/bootstrap4/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

//set redux
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from "redux"; 
//state ที่สนใจ,  action state เราอยู่ไหน
// const store=createStore(reducer, 1);

// reducer
import {getNameFilesTest} from './reducers/GetNameTestsCase';
import {runTestReducer} from './reducers/RuningTest';

// Middleware
const logger=(store)=>(next)=>(action)=>{
    console.log("Log Action", action);
    next(action);
}

//multiple stores
const store=createStore(combineReducers({runTestR: runTestReducer, getFiles: getNameFilesTest}), {},applyMiddleware(logger));

// store.subscribe(()=>{
//     console.log(store.getState());
// });

// store.dispatch({
//     type:"getAllFiles",
//     payload: ["Loading"]
// });

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
