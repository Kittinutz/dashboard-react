import {socket} from './socketIO';
// var runningState = false;

export function startLaravelDuskTest(nameTest){
    socket.emit('runTest', nameTest)
    // runningState=true;
}