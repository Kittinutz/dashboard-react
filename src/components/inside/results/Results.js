import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {socket} from '../../SocketIO';

import Pass from './Pass';
import Fails from './Fails';
import Error from './Error';

import {getResTest} from '../../../actions/GetSaveData';

class Results extends Component {
  componentDidMount(){
    socket.on('SC_STATUS_TEST_DATA', (data)=>{
      this.props.getResTest(data.pass, data.fails, data.err);
      console.log('Pass :'+data.pass);
    });
  }
  render() {
    return (
        <div className="container rs-pd-buttom">
          <div className="row">
            <Pass pass={this.props.backup.testStatus.pass}
              sum={this.props.backup.testStatus.pass + this.props.backup.testStatus.fails + this.props.backup.testStatus.err }/>
            <Fails fails={this.props.backup.testStatus.fails} 
              sum = {this.props.backup.testStatus.pass + this.props.backup.testStatus.fails + this.props.backup.testStatus.err }/>
            <Error err={this.props.backup.testStatus.err}
              sum = {this.props.backup.testStatus.pass + this.props.backup.testStatus.fails + this.props.backup.testStatus.err }/>
          </div>
        </div>
    );
  }
}
function mapStatetoProps(state){ 
  return {
    ...state,
    backup: state.backup
  }
}
function mapDispatchtoProps(dispatch){ 
  return bindActionCreators(
    {
      getResTest: getResTest
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (Results);
