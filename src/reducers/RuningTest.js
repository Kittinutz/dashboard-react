const runTestState={
    namePJ: null,
    running : false,
    nameTest : null,
    status: 'STOP'
}

export const runTestReducer=(state=runTestState, action)=>{
    switch (action.type){
        case "TEST_RUN":
            state={
                ...state,
                status: 'Running',
                nameTest: action.payload,
                running: true
            }
            break;
        case "TEST_STOP":
            state={
                ...state,
                status: action.payload,
                nameTest: null,
                running: false
            }
            break;
        case "SET_NAMEPJ":
            state={
                ...state,
                namePJ: action.payload
            }
            break;
        default:
    }
    return state;
}