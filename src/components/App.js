import React, { Component } from 'react';
import {connect} from "react-redux";
import {socket} from './socketIO';

import Topbar from './topBar/Topbar';
import Inside from './inside/Inside';
// for top css

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      nf: null,
      flagServe: true,
      getFiles: ()=>{
                  if(this.state.nf != null && this.state.flagServe ===true) {
                    this.setState({ flagServe: false});
                    // console.log(flagServe);
                    this.props.getNameFile(this.state.nf);
                   } 
      }
    }
  }
  //nf คือ nameFiles ใน const
  componentDidMount(){
    socket.on('getNameFiles', (nameFiles) => {
        this.setState({ nf: [...nameFiles] });
      }
    )
  }

  render() {
    setTimeout(()=>{
      this.state.getFiles();
    },100);
    
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
        type: "GET_NAMETESTSCASE",
        payload: nameFiles
      })
      return nameFiles;
    }
  }
}

export default connect(mapStatetoProp, mapDispatchtoProp) (App);
