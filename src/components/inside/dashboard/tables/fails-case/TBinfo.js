import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { 
   Table
 } from 'reactstrap';

import ReadFileConf from '../../../test-engine/ReadFileConf';

class TBinfo extends Component {
  constructor(props){
    super(props)
    this.state={
      allList: [],
      resetInfo: false
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.getInfo.nameTest !== this.props.getInfo.nameTest){
      this.setState({
        allList: [...this.props.runTest.priTest, ...this.props.getInfo.nameTest]
      });
    }

  }
  
  render() {
    var id = 0;
    var listTest = this.state.allList.map((list,i) =>{
      let onDrive ='normal-data';
      let allCST= [...this.props.backup.caseStatus[1], ...this.props.backup.caseStatus[0]];
      let allTLT = [...this.props.backup.timeLastTest[1], ...this.props.backup.timeLastTest[0]];
      if(i < this.props.runTest.priTest.length){
        onDrive = 'priority-data';
      }
      if(typeof allTLT[i] === 'undefined' || allTLT[i].length === 0 ){
        allTLT[i] = ' - ';
      }
      if(allCST[i] !== 'FAILURES!'){
         id++;
      }
      if(allCST[i] === 'FAILURES!'){
        return [
          <tr key={i}>
            <th scope="row" className="center">{i+1-id}</th>
            <td>{list}</td>
            <td>{allTLT[i]}</td>
            <td className="table-mini"><ReadFileConf drive={onDrive} namelog={list} keys={i}/></td>
          </tr>
        ]
      }
      else{
        return [
        <tr key={i}>
        </tr>
        ]; 
      }
    });

    return (
      <Table striped >
        <thead>
          <tr>
            <th className="table-mini">#</th>
            <th className="table-name">Test Name</th>
            <th className="table-time">Last test</th>
            <th className="table-mini">log</th>
          </tr>
        </thead>
        <tbody>
         {listTest}
        </tbody>
      </Table>
    );
  }
}
function mapStatetoProps(state){ 
  return {
    ...state,
    runTest: state.runTest,
    getInfo: state.getInfo,
    backup: state.backup
  }
}

function mapDispatchtoProps(dispatch){ 
  return bindActionCreators(
    {
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (TBinfo);
