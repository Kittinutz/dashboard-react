import React, { Component } from 'react'
import { 
   Button
 } from 'reactstrap';

 import RunConf from '../RunConf';

class Index extends Component {

  render() {
    return (
        <tr>
          <th scope="row">1</th>
          <td><RunConf /></td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button color="info" className="btn-table">info</Button></td>
        </tr>
    );
  }
}

export default Index;
