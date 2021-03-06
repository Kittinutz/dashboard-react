import React, { Component } from 'react'
import { 
  Card, CardTitle
 } from 'reactstrap';

import TBinfo from './TBinfo';

class TableErrLists extends Component {

  render() {
    return (
        <Card className="mb-3 tb-set sdow-box magin-center" >
          <div className="tb-ErrCase-Head card-header">
            <CardTitle> Table: Error Case </CardTitle>
          </div>
          <div className="tb-ErrCase overTable">
            <TBinfo />
          </div>
          {/* <div className="tb-ErrCase card-footer small text-muted">Updated yesterday at 11:59 PM
          </div> */}
        </Card>
    );
  }
}

export default TableErrLists;
