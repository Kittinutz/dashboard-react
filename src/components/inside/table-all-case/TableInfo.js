import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {socket} from '../../SocketIO';
import { 
   Table
 } from 'reactstrap';

import RunTestConf from '../RunTestConf';
import ReadFileConf from '../ReadFileConf';

import {getTimeTest, getCaseStatus} from '../../../actions/GetSaveData';

class TableInfo extends Component {

  componentDidMount(){
    // set time test and data when stop test
    socket.on('SC_STATUS_TEST_DATA', (data)=>{
        this.props.getTimeTest(data.testTime, data.keys);
        this.props.getCaseStatus(data.caseStatus, data.keys);
    });
    console.log(this.props.backup.caseStatus);
  }

  render() {
    const nameTest = this.props.getInfo.nameTest.map((nameFiles,i) =>{
      if( typeof this.props.backup.timeLastTest[i] === 'undefined' || this.props.backup.timeLastTest[i].length === 0 ){
        this.props.backup.timeLastTest[i] = '-';
      }
      if( typeof this.props.backup.timeTest[i] === 'undefined' || this.props.backup.timeTest[i].length === 0 ){
        this.props.backup.timeTest[i] = '-';
      }
      if( typeof this.props.backup.caseStatus[i] === 'undefined' || this.props.backup.caseStatus[i].length === 0 ){
        this.props.backup.caseStatus[i] = 'Never tested';
      }
      return (
        <tr key={i}>
          <th scope="row" className="center">{i+1}</th>
          <td><RunTestConf nameTest ={nameFiles} keys={i}/></td>
          <td className="center">{this.props.backup.caseStatus[i]}</td>
          <td>{nameFiles}</td>
          <td>{this.props.backup.timeTest[i]}</td>
          <td>{this.props.backup.timeLastTest[i]}</td>
          <td><ReadFileConf namelog={nameFiles} keys={i}/></td>
        </tr>
      )
    });
    
    return (
      <Table striped >
        <thead>
          <tr>
            <th className="table-mini">#</th>
            <th className="table-mini">RUN</th>
            <th className="table-Lmini">Status</th>
            <th className="table-name">Test Name</th>
            <th className="table-time">Time</th>
            <th className="table-time">Last test</th>
            <th className="table-mini">log</th>
          </tr>
        </thead>
        <tbody>
         {nameTest}
        </tbody>
      </Table>
    );
  }
}
function mapStatetoProps(state){ 
  return {
    ...state,
    getInfo: state.getInfo,
    backup: state.backup
  }
}

function mapDispatchtoProps(dispatch){ 
  return bindActionCreators(
    {
      getTimeTest: getTimeTest,
      getCaseStatus: getCaseStatus
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (TableInfo);
