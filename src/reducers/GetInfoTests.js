//store
const storeTestsCase={
    nameTest : []
}

export const GetInfoTests=(state=storeTestsCase, action)=>{
    switch(action.type){
        case "GET_NAMETESTSCASE":
            state={
                ...state,
                nameTest: action.payload
            }
            break;
        default:
    }
    return state;
}
