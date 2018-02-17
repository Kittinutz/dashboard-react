import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import {startLaravelDuskTest} from './components/startLaravelDuskTest';
// import {socket} from './components/socketIO';
//topcss
import './vendor/bootstrap4/css/bootstrap.css';
import './vendor/css/sb-admin.css';
// for second css
import './vendor/css/top.css';
import './vendor/css/Inside.css';
import './vendor/css/log-details.css';
import './vendor/css/results.css';

import registerServiceWorker from './registerServiceWorker';

//set redux
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from "redux"; 
//state ที่สนใจ,  action state เราอยู่ไหน
// const store=createStore(reducer, 1);

// reducer
import {GetInfoTests} from './reducers/GetInfoTests';
import {runTestReducer} from './reducers/RuningTest';
import {BackupStore} from './reducers/BackupStore';

// Middleware
const logger=(store)=>(next)=>(action)=>{
    // console.log(store.getState().backup.timeTest);
    console.log("Log Action", action);
    next(action);
}

//multiple stores
const store=createStore(combineReducers({
    runTest: runTestReducer, 
    getInfo: GetInfoTests,
    backup : BackupStore
 }), {},applyMiddleware(logger));

store.subscribe(()=>{
    console.log(store.getState().backup.timeTest);
});

// setTimeout(()=>{
//     store.dispatch({
//         type:"GET_NAMETESTSCASE",
//         payload: "1233"
//     });
// }, 1000)

// setTimeout(()=>{
//     store.dispatch({
//         type:"GET_NAMETESTSCASE",
//         payload: "122"
//     });
// }, 2000)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
