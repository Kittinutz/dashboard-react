import React, { Component } from 'react'
import { 
   Button, Table
 } from 'reactstrap';

 import RunConf from '../RunConf';

class TableInfo extends Component {
  render() {
    const nameTest = this.props.nameFiles.map((nameFiles,i) =>{
      return (
        <tr key={i}>
          <th scope="row">{i+1}</th>
          <td><RunConf nameTest ={nameFiles}/></td>
          <td>Otto</td>
          <td>{nameFiles}</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button color="info" className="btn-table">info</Button></td>
        </tr>
      )
    })
    return (
      <Table striped>
        <thead>
          <tr>
            <th className="table-mini">#</th>
            <th className="table-mini">RUN</th>
            <th className="table-Lmini">Status</th>
            <th>Test Name</th>
            <th>Time</th>
            <th>Last test</th>
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
