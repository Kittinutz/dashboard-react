import React, { Component } from 'react';
import {connect} from 'react-redux';
import {socket} from '../SocketIO';
import {bindActionCreators} from 'redux';
import { TabContent, TabPane } from 'reactstrap';

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
      activeTab: this.props.runTest.tabID
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
  
  componentDidUpdate(){
    if(this.props.runTest.tabID !== this.state.activeTab){
        this.setState({
            activeTab: this.props.runTest.tabID
        })
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Results />
            <div className="container-fluid">
              <TableFailsLists />
              <TableErrLists />  
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="container-fluid">
              {/* <TablePriorityCase /> */}
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
      runTest: state.runTest
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
