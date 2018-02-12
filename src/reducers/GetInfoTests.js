//store
const storeTestsCase={
    nameTest : [],
    timeTest : []
}

export const GetInfoTests=(state=storeTestsCase, action)=>{
    switch(action.type){
        case "GET_NAMETESTSCASE":
            state={
                ...state,
                nameTest: action.payload
            }
            break;
        case "SET_TIMETESTCASE":
                state.timeTest[(action.payloadID.slice(2)-1)] =  action.payloadTime;
            break;
        default:
    }
    return state;
}
