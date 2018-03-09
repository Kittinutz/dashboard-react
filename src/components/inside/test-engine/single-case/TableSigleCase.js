import React, { Component } from 'react'
import { 
  Card, CardTitle
 } from 'reactstrap';

// import TableInfo from './TableInfo';
import TBinfo from './TBinfo';

class TableSigleCase extends Component {

  render() {
    return (
      <Card className="mb-3  tb-set  sdow-box magin-center">
        <div className="tb-singleCase-Head card-header">
          <CardTitle> Table: Test Single Case </CardTitle>
        </div>
        <div className="tb-singleCase overTable">
          <TBinfo />
        </div>
        {/* <div className="tb-singleCase card-footer small text-muted">Updated yesterday at 11:59 PM
        </div> */}
      </Card>
    );
  }
}

export default TableSigleCase;
