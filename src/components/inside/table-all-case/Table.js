import React, { Component } from 'react'
import { 
  Card, CardTitle
 } from 'reactstrap';

import TableInfo from './TableInfo'; 

class Table extends Component {

  render() {
    return (
      <Card className="mb-3 bg-dark sdow-box magin-center">
        <div className="card-header">
          <CardTitle> Main Case Table </CardTitle>
        </div>
        <div className="bg-svdark overTable">
          <TableInfo />
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM
        </div>
      </Card>
    );
  }
}

export default Table;
