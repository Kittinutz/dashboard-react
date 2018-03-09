import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { 
   Table
 } from 'reactstrap';

import RunTestConf from '../RunTestConf';
import ReadFileConf from '../ReadFileConf';

class TBinfo extends Component {
  constructor(props){
    super(props)
    this.state={
      priTest: this.props.runTest.priTest,
      resetInfo: false
    }
  }
    
  componentDidUpdate(prevProp, prevState){
    if(prevProp.runTest.priTest !== this.props.runTest.priTest){
      this.setState({
        priTest : this.props.runTest.priTest
      });
    }
  }
  
  render() {
    var priTest = this.state.priTest.map((priName,i) =>{
      if( typeof this.props.backup.timeLastTest[1][i] === 'undefined' || this.props.backup.timeLastTest[1][i].length === 0 ){
        this.props.backup.timeLastTest[1][i] = '-';
      }
      if( typeof this.props.backup.timeTest[1][i] === 'undefined' || this.props.backup.timeTest[1][i].length === 0 ){
        this.props.backup.timeTest[1][i] = '-';
      }
      if( typeof this.props.backup.caseStatus[1][i] === 'undefined' || this.props.backup.caseStatus[1][i].length === 0 ){
        this.props.backup.caseStatus[1][i] = 'Never tested';
      }
      return [
        <tr key={i}>
          <th scope="row" className="center">{i+1}</th>
          <td><RunTestConf drive='priority-data' nameTest={priName} keys={i}/></td>
          <td>{this.props.backup.caseStatus[1][i]}</td>
          <td>{priName}</td>
          <td>{this.props.backup.timeTest[1][i]}</td>
          <td>{this.props.backup.timeLastTest[1][i]}</td>
          <td><ReadFileConf drive='priority-data' namelog={priName} keys={i}/></td>
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
         {priTest}
        </tbody>
      </Table>
    );
  }
}
function mapStatetoProps(state){ 
  return {
    ...state,
    runTest: state.runTest,
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
