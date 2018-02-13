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
        case "SET_LASTTEST":
            state.timeLastTest[(action.payloadID.slice(2)-1)] =  action.payloadTime;
            break;
        case "GET_SAVETIMELASTTEST":
            state.timeLastTest = action.payload;
            // console.log(action.payload);
            break;
        default:
    }
    return state;
}
