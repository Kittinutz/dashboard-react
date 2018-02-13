const infomations={
    timeLastTest : [],
    timeTest: [],
    testStus:{
        pass: 0,
        fails: 0,
        err: 0,
    }
}

export const BackupStore=(state=infomations, action)=>{
    switch(action.type){
        case "GET_SAVE":
            state.timeLastTest = action.payloadTLT;
            state.timeTest = action.payloadTT;
            break;

        case "SET_LASTTEST":
            state.timeLastTest[action.payloadID] =  action.payloadTime;
            break;
        
        case "GET_SAVETIMELASTTEST":
            state.timeLastTest = action.payload;
            break;

        case "GET_SAVETIMETEST":
            state.timeTest[action.keys] =  action.payload;
            break;
        default:
    }
    return state;
}
