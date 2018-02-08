import React, { Component } from 'react'
import {connect} from "react-redux";
import { 
  Card, CardTitle
 } from 'reactstrap';

import TableInfo from './TableInfo'; 

class Index extends Component {
  
  render() {
    return (
      <Card className="mb-3 bg-dark sdow-box magin-center">
        <div className="card-header">
          <CardTitle> Main Case Table </CardTitle>
        </div>
        <div className="bg-svdark overTable">
          <TableInfo nameFiles={this.props.getFiles.nameTest} />
          {/* <TableInfo/> */}
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM
        </div>
      </Card>
    );
  }
}

const mapStatetoProp=(state)=>{ 
  return {
    runTestR: state.runTestR,
    getFiles: state.getFiles
  }
}

export default connect(mapStatetoProp) (Index);
