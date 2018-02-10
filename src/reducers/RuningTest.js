const runTestState={
    run : false,
    nameTest : "",
    runningState : false
}

export const runTestReducer=(state=runTestState, action)=>{
    switch (action.type){
        case "run":
            if(state.runningState === false)
            state={
                ...state,
                run: true,
                nameTest: action.payload,
                runningState: true
            }
            break;
        default:
    }
    return state;
}