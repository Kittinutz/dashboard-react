const infomations = {
    timeLastTest: [],
    timeTest: [],
    caseStatus: [],
    testStatus: {
        pass: 0,
        fails: 0,
        err: 0,
    }
}

export const BackupStore = (state = infomations, action) => {
    switch (action.type) {
        case "GET_SAVE":
            state.timeLastTest = action.payloadTLT;
            state.timeTest = action.payloadTT;
            state.caseStatus = action.payloadCST;
            state.testStatus.pass = action.payloadSPS;
            state.testStatus.fails = action.payloadSFS;
            state.testStatus.err = action.payloadSER;
            return state

        case "SET_LASTTEST":
            state.timeLastTest[action.payloadArrID][action.payloadID] = action.payloadTime;
        case "GET_SAVETIMETEST":
            state.timeTest[action.drive][action.keys] = action.payload;
            return state

        case "GET_SAVETESTSTATUS":
            state.caseStatus[action.drive][action.keys] = action.payload;
            return state

        case "GET_RESTEST":
            state.testStatus = {
                pass: action.payloadPass,
                fails: action.payloadFails,
                err: action.payloadErr
            }
            return state
        default:
    }
    return state;
}
