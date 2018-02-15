export function getSaveData(dataTLT, dataTT){
    return{
        type: "GET_SAVE",
        payloadTLT: dataTLT,
        payloadTT: dataTT
    }
}

export function getTimeLastTest(data) {
    return {
        type: "GET_SAVETIMELASTTEST",
        payload: data
    }
}

export function setTimeTest(testTime, keys){
    return {
        type: "SET_SAVETIMETEST",
        payload: testTime,
        keys: keys
    }
}
