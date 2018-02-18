import React, { Component } from 'react';
import {socket} from '../SocketIO';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { 
   Button, Popover, PopoverBody, PopoverHeader
 } from 'reactstrap';
 
//actions
import {setRunTest, stopTest, setTimeLastTest} from '../../actions/TesterAction';
import {setTimeTest} from '../../actions/GetSaveData';

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
          <Popover className="popover-in-table" target={this.props.nameTest} placement="bottom" isOpen={this.state.popoverOpenT}  toggle={this.toggleT}>
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
    var date = new Date(),
        hh = (date.getHours()<10?'0':'') + date.getHours(),
        mm = (date.getMinutes()<10?'0':'') + date.getMinutes(),
        ss = (date.getSeconds()<10?'0':'') +date.getSeconds(),
        d = (date.getDate()<10?'0':'') +date.getDate(),
        m = ((date.getMonth()+1)<10?'0':'') +(date.getMonth()+1);

    var time = hh+':'+mm+':'+ss+'-'+ d +'/'+ m +'/'+date.getFullYear();
    this.setState({
      running: true,
      nameTest: this.props.nameTest
    });
    // upload to store
    this.props.setRunTest(this.props.nameTest);
    this.props.setTimeLastTest(time, this.props.keys);
    this.props.setTimeTest('Working...', this.props.keys);

    this.toggleT();
    socket.emit('SC_BACKUP_TIMELASTTEST', this.props.backup.timeLastTest);
    socket.emit('SC_RUN_LaravelDusk', { nameTest : this.props.nameTest, keys : this.props.keys});
    socket.on('SC_STATUS_TEST', (data)=>{
      if(data.status === 'stop')
      {
        this.props.stopTest(this.props.nameTest);
        this.setState({
          status: data.status
        });
      }
      //when stop set time test in tableinfo.js
    });
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
    ...state,
    runTest: state.runTest,
    backup: state.backup
  }
}

function mapDispatchtoProps(dispatch){ 
  return bindActionCreators(
    {
      setRunTest: setRunTest,
      stopTest: stopTest,
      setTimeLastTest: setTimeLastTest,
      setTimeTest: setTimeTest
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (RunTestConf);
