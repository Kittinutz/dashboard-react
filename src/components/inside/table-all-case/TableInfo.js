import React, { Component } from 'react'
import { 
   Button, Table
 } from 'reactstrap';

 import RunConf from '../RunConf';
class TableInfo extends Component {
  state = {
    loadPage:false,
    shutup: true
  } 

  componentWillReceiveProps(nextProps) {
    const { nameFiles } = nextProps;
    console.log(nameFiles);
    if(nameFiles.length !==0 ) {
      this.setState({ loadPage: true });
    } 
  }

  renderDetail(nameFiles) {
    console.log(nameFiles.length);
    let i = 0;
    return nameFiles.map((nameFiles) =>{
      console.log('InMap', nameFiles);
      i++;
      return (
        <tr key={i}>
          <th scope="row">{i}</th>
          <td><RunConf nameTest ={nameFiles}/></td>
          <td>Otto</td>
          <td>{nameFiles}</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button color="info" className="btn-table">info</Button></td>
        </tr>
      )});
  }

  render() {
    const { nameFiles } = this.props; 
    console.log(nameFiles); 
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
          {(nameFiles.length !== 0) ? this.renderDetail(nameFiles): ''}
        </tbody>
      </Table>
    );
  }
}

export default  TableInfo;
