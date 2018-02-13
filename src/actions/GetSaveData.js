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

export function getTimeTest(testTime, keys){
    return {
        type: "GET_SAVETIMETEST",
        payload: testTime,
        keys: keys
    }
}
