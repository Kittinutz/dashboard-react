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