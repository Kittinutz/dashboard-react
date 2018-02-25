export function getNameFiles(nameFile) {
    return {
        type: "GET_NAMETESTSCASE",
        payload: nameFile
    }
}

export function getListPJs(listPJs){
    return {
        type: "GET_LISTPROJECTS",
        payload: listPJs
    }
}
