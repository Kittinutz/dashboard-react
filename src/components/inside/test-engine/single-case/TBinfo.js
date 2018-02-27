import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {socket} from '../../../SocketIO';
import { 
   Table
 } from 'reactstrap';

import RunTestConf from '../RunTestConf';
import ReadFileConf from '../ReadFileConf';

class TBinfo extends Component {
  constructor(props){
    super(props)
    this.state={
      nameTest: [],
      resetInfo: false
    }
  }
    
  // componentDidMount(){
  //   // set time test and data when stop test
  //   socket.on('SC_STATUS_TEST_DATA', (data)=>{
  //       this.props.getTimeTest(data.testTime, data.keys);
  //       this.props.getCaseStatus(data.caseStatus, data.keys);
  //   });
  // }

  componentDidUpdate(prevProp, prevState){
    if(prevProp.getInfo.nameTest !== this.props.getInfo.nameTest){
      this.setState({
        nameTest : this.props.getInfo.nameTest
      });
    }
  }
  
  render() {
    var nameTest = this.state.nameTest.map((nameFiles,i) =>{
      if( typeof this.props.backup.timeLastTest[0][i] === 'undefined' || this.props.backup.timeLastTest[0][i].length === 0 ){
        this.props.backup.timeLastTest[0][i] = '-';
      }
      if( typeof this.props.backup.timeTest[0][i] === 'undefined' || this.props.backup.timeTest[0][i].length === 0 ){
        this.props.backup.timeTest[0][i] = '-';
      }
      if( typeof this.props.backup.caseStatus[0][i] === 'undefined' || this.props.backup.caseStatus[0][i].length === 0 ){
        this.props.backup.caseStatus[0][i] = 'Never tested';
      }
      return [
        <tr key={i}>
          <th scope="row" className="center">{i+1}</th>
          <td><RunTestConf drive='normal-data' nameTest ={nameFiles} keys={i}/></td>
          <td className="center">{this.props.backup.caseStatus[0][i]}</td>
          <td>{nameFiles}</td>
          <td>{this.props.backup.timeTest[0][i]}</td>
          <td>{this.props.backup.timeLastTest[0][i]}</td>
          <td><ReadFileConf drive='normal-data' namelog={nameFiles} keys={i}/></td>
        </tr>
      ]
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
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (TBinfo);
