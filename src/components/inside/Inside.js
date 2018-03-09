import React, { Component } from 'react';
import {connect} from 'react-redux';
import {socket} from '../SocketIO';
import {bindActionCreators} from 'redux';
import {Collapse, TabContent, TabPane } from 'reactstrap';

// tabID 1
import Results from './dashboard/results/Results';
import TableFailsLists from './dashboard/tables/fails-case/TableFailsLists';
import TableErrLists from './dashboard/tables/err-case/TableErrLists';

//tabID 2
import TablePriorityCase from './test-engine/priority-case/TablePriorityCase';
import TableSigleCase from './test-engine/single-case/TableSigleCase';

//tableID 3
import TableCaseLists from './case-lists/TableCaseLists';

import {getTimeTest, getCaseStatus} from '../../actions/GetSaveData';

class Inside extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: this.props.runTest.tabID,
      fails: 0,
      err: 0,
      tb_fails: false,
      tb_err: false
    };
  }

  componentDidMount(){
    // set time test and data when stop test
    socket.on('SC_STATUS_TEST_DATA', (data)=>{
      if(data.drive === "normal-data"){
        this.props.getTimeTest(data.testTime, data.keys, 0);
        this.props.getCaseStatus(data.caseStatus, data.keys, 0);
      }
      else if(data.drive ==="priority-data"){
        this.props.getTimeTest(data.testTime, data.keys, 1);
        this.props.getCaseStatus(data.caseStatus, data.keys, 1);
      }
    });
  }
  
  componentDidUpdate(prevProps, prevState){
    if(this.props.runTest.tabID !== this.state.activeTab){
        this.setState({
            activeTab: this.props.runTest.tabID
        })
    }

    if(this.props.backup.testStatus.err !== this.state.err ){
      if(this.props.backup.testStatus.err !== 0){
        this.setState({
          err: this.props.backup.testStatus.err,
          tb_err: true
        });
      }
      else{
        this.setState({
          err: this.props.backup.testStatus.err,
          tb_err: false
        });
      }
    }

    if(this.props.backup.testStatus.fails !== this.state.fails ){
      if(this.props.backup.testStatus.fails !== 0){
        this.setState({
          fails: this.props.backup.testStatus.fails,
          tb_fails: true
        });
      }
      else{
        this.setState({
          fails: this.props.backup.testStatus.fails,
          tb_fails: false
        });
      }
    }
    // console.log(this.props.backup.testStatus.err +' vs '+ this.state.err);
  }

  render() {
    return (
      <div className="content-wrapper">
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Results />
            <div className="container-fluid">
              <Collapse isOpen={this.state.tb_fails}>
                <TableFailsLists />
                <div className="space-tb"> </div>
              </Collapse>
              <Collapse isOpen={this.state.tb_err}>
                <TableErrLists />
              </Collapse>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="container-fluid">
              <TablePriorityCase/>
              <div className="space-tb"> </div>
              <TableSigleCase />
            </div>
          </TabPane> 
          <TabPane tabId="3">
            <div className="container-fluid">
              <TableCaseLists />
            </div>
          </TabPane>    
        </TabContent>
      </div>
    );
  }
}

function mapStatetoProps(state){ 
  return {
      ...state,
      runTest: state.runTest,
      backup: state.backup
  }
}

function mapDispatchtoProps(dispatch){ 
  return bindActionCreators(
    {
      getTimeTest: getTimeTest,
      getCaseStatus: getCaseStatus
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (Inside);
