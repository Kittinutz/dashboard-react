import React, { Component } from 'react'
import { 
  Card, CardTitle
 } from 'reactstrap';

import TBinfo from './TBinfo';

class TableFailsLists extends Component {

  render() {
    return (
      <Card className="mb-3  tb-FailsCase-Head  sdow-box magin-center">
        <div className="card-header">
          <CardTitle> Table: Fails Case </CardTitle>
        </div>
        <div className=" tb-FailsCase overTable">
          <TBinfo />
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM
        </div>
      </Card>
    );
  }
}

export default TableFailsLists;
