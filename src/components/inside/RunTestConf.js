import React, { Component } from 'react';
import {socket} from '../SocketIO';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { 
   Button, Popover, PopoverBody, PopoverHeader
 } from 'reactstrap';
 
//actions
import {setRunTest, stopTest} from '../../actions/TesterAction';
class RunTestConf extends Component {
  constructor(props) {
    super(props);
    this.toggleT = this.toggleT.bind(this);
    this.toggleF = this.toggleF.bind(this);
    this.state = {
      popoverOpenT: false,
      popoverOpenF: false,
      running: this.props.runTest.running,
      nameTest: this.props.runTest.nameTest,
      state: null
    };
  }

  render() {
    return (
        <div>  
          <Button id={this.props.nameTest} color="danger" className="btn-table" onClick={this.selectPop.bind(this)}> RUN </Button>
          <Popover target={this.props.nameTest} placement="bottom" isOpen={this.state.popoverOpenT}  toggle={this.toggleT}>
            <PopoverHeader> {this.props.nameTest} ?</PopoverHeader>
            <PopoverBody>  
                <Button className="btn-table right"
                  onClick={this.toggleT}
                >No</Button>

                <Button color="success" className="btn-table right"  
                  onClick={this.run1Test.bind(this)}
                > Yes</Button>
            </PopoverBody>
          </Popover>

          <Popover target={this.props.nameTest} placement="bottom" isOpen={this.state.popoverOpenF}  toggle={this.toggleF}>
            <PopoverHeader> STOP!</PopoverHeader>
            <PopoverBody>  
              System working with {this.state.nameTest}.
            </PopoverBody>
          </Popover>
        </div>
    );
  }

  toggleT() {
    this.setState({
      popoverOpenT: !this.state.popoverOpenT
    });
  }

  toggleF(){
    this.setState({
      popoverOpenF: !this.state.popoverOpenF
    });
  }

  selectPop(){
    if(this.state.running === false){
      this.toggleT();
    }
    else{
      this.toggleF();
    }
  }

  run1Test(){
    this.setState({
      running: true,
      nameTest: this.props.nameTest
    });
    this.props.setRunTest(this.props.nameTest);

    this.toggleT();
    socket.emit('SC_RUNTEST', this.props.nameTest);
    socket.on('SC_STATUS_TEST', (status)=>{
      this.props.stopTest(this.props.nameTest);
      this.setState({
        status: status
      });
    })
  }

  componentDidUpdate(prevProps, prevState){
      if(prevProps.runTest !== this.props.runTest){
      this.setState({
        running: this.props.runTest.running,
        nameTest: this.props.runTest.nameTest,
        popoverOpenT: false,
        popoverOpenF: false,
      });
    }
  }

}

function mapStatetoProps(state){ 
  return {
    runTest: state.runTest,
  }
}

function mapDispatchtoProps(dispatch){ 
  return bindActionCreators(
    {
      setRunTest: setRunTest,
      stopTest: stopTest
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (RunTestConf);
