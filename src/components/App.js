import React, { Component } from 'react';
import {connect} from "react-redux";
import {socket} from './socketIO';

import Topbar from './topBar/Topbar';
import Inside from './inside/Inside'
// for top css

class App extends Component {
  componentWillMount(){
    var filesArray = this.props.getFiles.nameTest;
    socket.on('getNameFiles', function(nameFiles){
      nameFiles.map((nameFiles)=>
      filesArray.push(nameFiles)
      )
    });
    // console.log(filesArray);
    // this.props.getFiles.nameTest= ["dsdsd","sdsd"]
    // console.log(this.props.getFiles.nameTest)
    // ()=>this.props.getAllFile(filesArray);
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
