const runTestState = {
    namePJ: null,
    tabID: '1',
    running: false,
    nameTest: null,
    priTest: [],
    status: 'STOP'
}

export const runTestReducer = (state = runTestState, action) => {
    switch (action.type) {
        case "TEST_RUN":
            state = {
                ...state,
                status: 'Running',
                nameTest: action.payload,
                running: true
            }
            return state
        case "TEST_STOP":
            state = {
                ...state,
                status: action.payload,
                nameTest: null,
                running: false
            }
            return state
        case "SET_NAMEPJ":
            state = {
                ...state,
                namePJ: action.payload
            }
            return state
        case "SET_MENUTAP":
            state = {
                ...state,
                tabID: action.payload
            }
            return state
        case "GET_LISTPRI":
            state = {
                ...state,
                priTest: action.payload
            }
            return state
        case "SET_NEWPRITEST":
            state = {
                ...state,
                priTest: [...state.priTest, action.payload]
            }
            return state
        default:
    }
    return state;
}