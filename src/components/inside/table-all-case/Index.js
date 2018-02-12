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
          <TableInfo nameFiles={this.props.getInfo.nameTest} />
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM
        </div>
      </Card>
    );
  }
}

function mapStatetoProps(state){ 
  return {
    getInfo: state.getInfo
  }
}

export default connect(mapStatetoProps) (Index);
