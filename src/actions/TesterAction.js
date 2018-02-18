export function setRunTest(nameFile) {
    return {
        type: "TEST_RUN",
        payload: nameFile
    }
}

export function stopTest(nameFile){
    return {
        type: "TEST_STOP",
        payload: nameFile
    }
}

export function setTimeLastTest(timeTest, ID){
    return {
        type: "SET_LASTTEST",
        payloadTime: timeTest,
        payloadID: ID
    }
}