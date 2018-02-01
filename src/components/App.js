import React, { Component } from 'react';
import {connect} from "react-redux";
import {socket} from './socketIO';

import Topbar from './topBar/Topbar';
import Inside from './inside/Inside'
// for top css

class App extends Component {
  componentDidMount(){
    socket.on('getNameFiles', function(nameFiles){
      nameFiles.map((nameFiles)=>
        console.log(nameFiles)
      )
    });
  }
  render() {
    return (
      <div className="bg-vdark v-full tx-white">
        <Topbar />
        <Inside />
      </div>
    );
  }
}

const mapStatetoProp=(state)=>{ 
  return {
    runTestR: state.runTestR,
    getFiles: state.getFiles
  }
}

const mapDispatchtoProp=(dispatch)=>{ 
  return {
    getNameFile:(nameFiles)=>{
      dispatch({
        type: "getAllFiles",
        payload: nameFiles 
      })
    }
  }
}

export default connect(mapStatetoProp, mapDispatchtoProp) (App);
// export default connect(mapStatetoProp) (App);
