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

export function getTimeTest(testTime, keys, drive){
    return {
        type: "GET_SAVETIMETEST",
        payload: testTime,
        keys: keys,
        drive: drive
    }
}

export function getCaseStatus(testStatus, keys, drive){
    return{
        type: "GET_SAVETESTSTATUS",
        payload: testStatus,
        keys: keys,
        drive: drive
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