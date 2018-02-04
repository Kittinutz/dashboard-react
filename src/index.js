import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import {startLaravelDuskTest} from './components/startLaravelDuskTest';
import {socket} from './components/socketIO';
//topcss
import './vendor/css/top.css';
import './vendor/css/Inside.css';
import './vendor/css/sb-admin.css';
// for second css
import './vendor/bootstrap4/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

//set redux
import {Provider}from "react-redux";
import {createStore, combineReducers, applyMiddleware} from "redux"; 
//state ที่สนใจ,  action state เราอยู่ไหน
// const store=createStore(reducer, 1);
const runTestState={
    run : false,
    nameTest : "",
    runningState : false
}

const dataTestCase={
    nameTest : []
}

const runTestReducer=(state=runTestState, action)=>{
    switch (action.type){
        case "run":
            state={
                ...state,
                run: true,
                nameTest: action.payload
            }
            break;
        // case "upVar":
        //     state={
        //         run: true,
        //         nameTest: [...state.nameTest],
        //     }
        //     break;
        case "runnig":
            state={
                ...state,
                runningState : action.payload
            }
            break;
        default:
    }
    return state;
}

const getNameFilesTest=(state=dataTestCase, action)=>{
    console.log(action)
    switch(action.type){
        case "getAllFiles":
            return state={
                nameTest: action.payload
            }
            break;
        default:
    }
    return state;
}
// Middleware
const logger=(store)=>(next)=>(action)=>{
    console.log("Log Action", action);
    next(action);
}
//multiple stores
const store=createStore(combineReducers({runTestR: runTestReducer, getFiles: getNameFilesTest}), {},applyMiddleware(logger));

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({
    type:"getAllFiles",
    payload: ["TC01loginTest", "TCXXTEST"]
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
