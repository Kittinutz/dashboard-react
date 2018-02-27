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

export function setTimeLastTest(timeTest, ID, arrID){
    return {
        type: "SET_LASTTEST",
        payloadTime: timeTest,
        payloadID: ID,
        payloadArrID: arrID
    }
}

export function setNewPJs(namePJs){
    return{
        type: "SET_NAMEPJ",
        payload: namePJs
    }
}

export function setMenuTap(tabID){
    return{
        type: "SET_MENUTAP",
        payload: tabID
    }
}

export function getListPri(listPri){
    return{
        type: "GET_LISTPRI",
        payload: listPri
    }
}

export function setNewPriority(priName){
    return{
        type: "SET_NEWPRITEST",
        payload: priName
    }
}