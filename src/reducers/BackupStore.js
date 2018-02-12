const infomations={
    lastTest : [],
    timeTest: []
}

export const BackupStore=(state=infomations, action)=>{
    switch(action.type){
        case "SET_LASTTEST":
                state.lastTest[(action.payloadID.slice(2)-1)] =  action.payloadTime;
            break;
        default:
    }
    return state;
}
