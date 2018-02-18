const infomations={
    timeLastTest : [],
    timeTest: [],
    caseStatus: [],
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
            state.caseStatus = action.payloadCST;
            break;

        case "SET_LASTTEST":
            state.timeLastTest[action.payloadID] =  action.payloadTime;
            break;
        
        case "SET_SAVETIMELASTTEST":
            state.timeLastTest = action.payload;
            break;

        case "GET_SAVETIMETEST":
            state.timeTest[action.keys] =  action.payload;
            break;
        
        case "GET_SAVETESTSTATUS":
            state.caseStatus[action.keys] = action.payload;
            break;
        default:
    }
    return state;
}
