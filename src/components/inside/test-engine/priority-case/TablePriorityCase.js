import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {socket} from '../../../SocketIO';
import { 
  Card, CardTitle, Button, Collapse, InputGroup, InputGroupAddon, Input
 } from 'reactstrap';

import TBinfo from './TBinfo'; 

import {setNewPriority} from '../../../../actions/TesterAction';

class TablePriorityCase extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      newPriority: '',
      namePJ: this.props.runTest.namePJ,
      status: 'ex: Level3'
    };
  }

  componentDidUpdate(){
    if(this.state.namePJ !== this.props.runTest.namePJ){
      this.setState({
        namePJ: this.props.runTest.namePJ,
        status: 'ex: Level3'
      });
    }
  }

  render() {
    return (
      <Card className="mb-3 tb-set sdow-box magin-center">
        <div className="tb-PriCase-Head card-header">
          <CardTitle> Table: Test Priority Case </CardTitle>
          <div>
            <Button color="success" className="btn-table" onClick={this.toggle}> Add Priority </Button>
          </div>
        </div>
        <Collapse isOpen={this.state.collapse} >
          <InputGroup>
            <InputGroupAddon ><Button color="danger" onClick={this.setPriName}> OK! </Button></InputGroupAddon>
            <Input type="text" value={this.state.newPriority} onChange={this.getPriName} placeholder={this.state.status} />
          </InputGroup>
        </Collapse>
        <div className="tb-PriCase overTable">
          <TBinfo />
        </div>
        {/* <div className="tb-PriCase card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div> */}
      </Card>
    );
  }

  getPriName = (e) =>{
    let newPri = e.target.value;
    if(this.state.namePJ !== null || newPri !== ''){
      this.setState({
        newPriority: newPri
      });
    }
  }

  setPriName =() =>{
    if((this.state.newPriority !== '' && this.state.newPriority.search("") === -1) &&  this.state.namePJ !== null){
      this.toggle();
      socket.emit('PR_BACKUPNEWPR', {
        drive:'priority-data', 
        namePJ: this.state.namePJ, 
        newPri: this.state.newPriority}
      );
      this.props.setNewPriority(this.state.newPriority);
      this.setState({
        newPriority: ''
      });
    }
    else{
      this.setState({
        newPriority: ''
      });
    }
  }

  toggle() {
    if(this.state.namePJ === null){
      this.setState({
        status: 'Choose your test driven before add  "Priority Case" !!'
      });
    }
    this.setState({ collapse: !this.state.collapse });
  }

}

function mapStatetoProps(state){ 
  return {
    ...state,
    runTest: state.runTest,
  }
}

function mapDispatchtoProps(dispatch){ 
  return bindActionCreators(
    {
      setNewPriority: setNewPriority
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (TablePriorityCase);
