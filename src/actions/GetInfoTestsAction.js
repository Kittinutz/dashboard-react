export function GetInfoTestsAction(nameFile) {
    return {
        type: "GET_NAMETESTSCASE",
        payload: nameFile
    }
}

export function setTimeTest(timeTest, ID){
    return {
        type: "SET_TIMETESTCASE",
        payloadTime: timeTest,
        payloadID: ID
    }
}