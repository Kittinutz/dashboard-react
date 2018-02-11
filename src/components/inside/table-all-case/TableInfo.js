import React, { Component } from 'react'
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import { 
   Table
 } from 'reactstrap';

import RunTestConf from '../RunTestConf';
import ReadFileConf from '../ReadFileConf';
class TableInfo extends Component {
  
  render() {
    const nameTest = this.props.nameFiles.map((nameFiles,i) =>{
      return (
        <tr key={i}>
          <th scope="row" className="center">{i+1}</th>
          <td><RunTestConf nameTest ={nameFiles}/></td>
          <td className="center">Fails</td>
          <td>{nameFiles}</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><ReadFileConf namelog={nameFiles}/></td>
          {/* <td><Button color="info" className="btn-table">info</Button></td> */}
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

export default  TableInfo;
