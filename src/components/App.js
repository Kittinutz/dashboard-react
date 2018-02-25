import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// connect server
import {socket} from './SocketIO';
// components
import Topbar from './topBar/Topbar';
import Inside from './inside/Inside';
//action
import {getNameFiles, getListPJs} from '../actions/GetInfoTestsAction';  
import {getSaveData} from '../actions/GetSaveData';
import {stopTest} from '../actions/TesterAction';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      nf: [],
      flagServe: true,
      saveData: null
    }
  }

  componentDidMount(){
    socket.on('SC_SAVEDATA', (data)=>{
      this.props.getSaveData(
        data.saveTLT,
        data.saveTT,
        data.saveCST,
        data.sumPass,
        data.sumFails,
        data.sumErr
      );
    });
    socket.on('SC_GETPROJECTS', (listPJ)=>{
      this.props.getListPJs(listPJ);
      console.log(listPJ);
    })
    socket.on('SC_GETNAMETESTCASE', (nameFiles) => {
        this.setState({ nf: nameFiles });
      }
    );
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.nf[0] !== this.state.nf[0]){
      this.setState({
        flagServe: true
      });
      this.props.getNameFiles(this.state.nf);
    }
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
      getNameFiles:  getNameFiles,
      getListPJs: getListPJs,
      getSaveData: getSaveData,
      stopTest: stopTest
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (App);
