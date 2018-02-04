import React, { Component } from 'react';
import {connect} from "react-redux";
import {socket} from './socketIO';

import Topbar from './topBar/Topbar';
import Inside from './inside/Inside'
// for top css

class App extends Component {
  constructor(props){
    super(props)
    this.state={nf: null,
                shutup: true}
  }
  
  async componentDidMount(){
    let { nf } = this.state;

    await socket.on('getNameFiles', (nameFiles) => {
      console.log(nameFiles);
           this.setState({ nf: nameFiles.slice(0, nameFiles.length) });
      }
    )

  }


  render() {
    const { nf, shutup } = this.state;
    console.log('Ta',nf);
    console.log(shutup);
    if(nf && shutup) {
      this.setState({ shutup: false});
      console.log('NF', nf);
      this.props.getNameFile(nf);
      // setTimeout(() =>{ this.setState({ shutup: true }) }, 35000);
    }
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
      return nameFiles;
    }
  }
}

export default connect(mapStatetoProp, mapDispatchtoProp) (App);
// export default connect(mapStatetoProp) (App);
