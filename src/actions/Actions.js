const mapDispatchtoProp=(dispatch)=>{ 
    return {
      getNameFile:(nameFiles)=>{
        dispatch({
          type: "GET_NAMETESTSCASE",
          payload: nameFiles
        })
        return nameFiles;
      }
    }
  } 