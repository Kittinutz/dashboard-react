//store
const storeTestsCase = {
    nameTest: [],
    listPJs: []
}

export const GetInfoTests = (state = storeTestsCase, action) => {
    switch (action.type) {
        case "GET_NAMETESTSCASE":
            return state = {
                ...state,
                nameTest: action.payload
            }
        case "GET_LISTPROJECTS":
            return state = {
                ...state,
                listPJs: action.payload
            }
        default:
    }
    return state;
}
