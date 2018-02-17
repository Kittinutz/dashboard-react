import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// connect server
import {socket} from './SocketIO';
// components
import Topbar from './topBar/Topbar';
import Inside from './inside/Inside';
//action
import {getInfoTestsAction} from '../actions/GetInfoTestsAction';  
import {getSaveData} from '../actions/GetSaveData';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      nf: null,
      flagServe: true
      
    }
  }

  componentDidMount(){
    socket.on('SC_GETNAMETESTCASE', (nameFiles) => {
        this.setState({ nf: [...nameFiles] });
      }
    );
    // get save data.
    socket.on('SC_SAVEDATA', (data)=>{
      this.props.getSaveData(data.saveTLT, data.saveTT);
    });
  }

  render() {
    setTimeout(()=>{
      if(this.state.nf != null && this.state.flagServe ===true) {
        this.setState({ flagServe: false});
        this.props.getInfoTestsAction(this.state.nf);
      }
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
    ...state,
    runTest: state.runTest,
    backup: state.backup
  }
}

function mapDispatchtoProps(dispatch){ 
  return bindActionCreators(
    {
      getInfoTestsAction:  getInfoTestsAction,
      getSaveData: getSaveData
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (App);
