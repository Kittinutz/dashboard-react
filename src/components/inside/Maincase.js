import React, { Component } from 'react'
import { 
  Table, Button
 } from 'reactstrap';

import io from 'socket.io-client';
const socket = io.connect('localhost:4000');
class Maincase extends Component {
  runTest(){
    socket.emit('run test');
  }
  render() {
    return (
      <div className="card mb-3 bg-dark sdow-box">
        <div className="card-header">
          <i className="fa fa-area-chart"></i> Main Case Table
        </div>
        <div className="bg-svdark">
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
                <tr>
                  <th scope="row">1</th>
                  <td><Button color="danger" className="btn-table" onClick={this.runTest.bind(this)}>RUN</Button></td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td><Button color="info" className="btn-table">info</Button></td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td><Button color="danger" className="btn-table">RUN</Button></td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td><Button color="info" className="btn-table">info</Button></td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td><Button color="danger" className="btn-table">RUN</Button></td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td><Button color="info" className="btn-table">info</Button></td>
                </tr>
          
              </tbody>
            </Table>
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM
        </div>
      </div>
    );
  }
}

export default Maincase;
