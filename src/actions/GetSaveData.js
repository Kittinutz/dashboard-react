export function getSaveData(dataTLT, dataTT, dataCST, dataSPS, dataSFS, dataSER){
    return{
        type: "GET_SAVE",
        payloadTLT: dataTLT,
        payloadTT: dataTT,
        payloadCST: dataCST,
        payloadSPS: dataSPS,
        payloadSFS: dataSFS,
        payloadSER: dataSER
    }
}

export function setTimeLastTest(data) {
    return {
        type: "SET_SAVETIMELASTTEST",
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

export function getCaseStatus(testStatus, keys){
    return{
        type: "GET_SAVETESTSTATUS",
        payload: testStatus,
        keys: keys
    } 
}

export function getResTest(pass, fails, err){
    return{
        type: "GET_RESTEST",
        payloadPass: pass,
        payloadFails: fails,
        payloadErr: err
    }
}