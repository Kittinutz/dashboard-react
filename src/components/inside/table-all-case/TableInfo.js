import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { 
   Table
 } from 'reactstrap';

import RunTestConf from '../RunTestConf';
import ReadFileConf from '../ReadFileConf';
class TableInfo extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     timeTest : this.props.getInfo.timeTest
  //   };
  // }  
  render() {
    const nameTest = this.props.nameFiles.map((nameFiles,i) =>{
      if( typeof this.props.backup.lastTest[i] === 'undefined'){
        this.props.backup.lastTest[i] = 'no time.';
        // console.log(this.props.getInfo.timeTest[i]);
      }
      return (
        <tr key={i}>
          <th scope="row" className="center">{i+1}</th>
          <td><RunTestConf nameTest ={nameFiles} keys={'TC'+ (i+1)}/></td>
          <td className="center">Fails</td>
          <td>{nameFiles}</td>
          <td></td>
          <td>{this.props.backup.lastTest[i]}</td>
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
    backup: state.backup
  }
}

function mapDispatchtoProps(dispatch){ 
  return bindActionCreators(
    {
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (TableInfo);
