import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// connect server
import {socket} from './SocketIO';
// components
import Topbar from './topBar/Topbar';
import Inside from './inside/Inside';
//action
import {getNameFile} from '../actions/GetNameFilesAction';  

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      nf: null,
      flagServe: true,
      getNameFile: ()=>{
                  if(this.state.nf != null && this.state.flagServe ===true) {
                    this.setState({ flagServe: false});
                    // console.log(flagServe);
                    this.props.getNameFile(this.state.nf);
                   } 
      }
    }
  }
  componentDidMount(){
    socket.on('SC_GETNAMETESTCASE', (nameFiles) => {
        this.setState({ nf: [...nameFiles] });
      }
    )
  }

  render() {
    setTimeout(()=>{
      this.state.getNameFile();
    },100);
    
    return (
      <div className="bg-vdark v-full tx-white">
        <Topbar />
        <Inside />
      </div>
    );
  }
}

function mapStatetoProps(state){ 
  return {
    getFiles: state.getFiles,
    runTest: state.runTest
  }
}

function mapDispatchtoProps(dispatch){ 
  return bindActionCreators(
    {
      getNameFile:  getNameFile
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (App);
