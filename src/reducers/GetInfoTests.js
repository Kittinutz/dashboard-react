//store
const storeTestsCase={
    nameTest : [],
    listPJs : []
}

export const GetInfoTests=(state=storeTestsCase, action)=>{
    switch(action.type){
        case "GET_NAMETESTSCASE":
            state={
                ...state,
                nameTest: action.payload
            }
            
            break;
        case "GET_LISTPROJECTS":
            
            state={
                ...state,
                listPJs: action.payload
            }
            break;    
        default:
    }
    return state;
}
