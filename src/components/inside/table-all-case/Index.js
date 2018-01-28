import React, { Component } from 'react'
import { 
  Table, Card, CardTitle
 } from 'reactstrap';

import TableInfo from './TableInfo'; 

class Index extends Component {

  render() {
    return (
      <Card className="mb-3 bg-dark sdow-box">
        <div className="card-header">
          <CardTitle> Main Case Table </CardTitle>
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
                <TableInfo />
                <TableInfo />
              </tbody>
            </Table>
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM
        </div>
      </Card>
    );
  }
}

export default Index;
