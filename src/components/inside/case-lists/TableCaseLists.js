import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
  Card, CardTitle
 } from 'reactstrap';

import TBinfo from './TBinfo';
class TableCaseLists extends Component {
  constructor (props){
    super(props);
    this.state={
      nameTestDriven: 'Not select'
    }
  }

  componentDidUpdate(prevProps){
    if(this.props.runTest.namePJ !== prevProps.runTest.namePJ){
      this.setState({
        nameTestDriven: this.props.runTest.namePJ
      })
    }
  }

  render() {
    return (
      <Card className="mb-3 tb-ListCase-Head  sdow-box magin-center">
        <div className="card-header">
          <CardTitle> {this.state.nameTestDriven} : Case Lists </CardTitle>
        </div>
        <div className="tb-ListCase overTable">
            <TBinfo />
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM
        </div>
      </Card>
    );
  }
}

function mapStatetoProps(state){ 
  return {
    ...state,
    runTest: state.runTest
  }
}


export default connect(mapStatetoProps) (TableCaseLists);
