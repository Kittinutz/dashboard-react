import React, { Component } from 'react';
import {socket} from '../SocketIO';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { 
   Button, Popover, PopoverBody, PopoverHeader
 } from 'reactstrap';
 
//actions
import {setRunTest, stopTest, setTimeLastTest} from '../../actions/TesterAction';
import {getTimeTest} from '../../actions/GetSaveData';

class RunTestConf extends Component {
  constructor(props) {
    super(props);
    this.toggleT = this.toggleT.bind(this);
    this.toggleF = this.toggleF.bind(this);
    this.run1Test = this.run1Test.bind(this);
    this.state = {
      popoverOpenT: false,
      popoverOpenF: false,
      running: this.props.runTest.running,
      nameFile: this.props.runTest.nameTest,
      nameTest: this.props.nameTest,
      timeLastTest: this.props.backup.timeLastTest,
      keys: this.props.keys,
      state: null
    };
  }

  render() {
    return (
        <div>  
          <Button id={this.state.nameTest} color="danger" className="btn-table" onClick={this.selectPop.bind(this)}> RUN </Button>
          <Popover className="popover-in-table" target={this.state.nameTest} placement="bottom" isOpen={this.state.popoverOpenT}  toggle={this.toggleT}>
            <PopoverHeader> {this.state.nameTest} ?</PopoverHeader>
            <PopoverBody>  
                <Button className="btn-table right"
                  onClick={this.toggleT}
                >No</Button>

                <Button color="success" className="btn-table right"  
                  onClick={this.run1Test}
                > Yes</Button>
            </PopoverBody>
          </Popover>

          <Popover target={this.state.nameTest} placement="bottom" isOpen={this.state.popoverOpenF}  toggle={this.toggleF}>
            <PopoverHeader> STOP!</PopoverHeader>
            <PopoverBody>  
              System working with {this.state.nameFile}.
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
      nameTest: this.state.nameTest
    });
    // upload to store
    this.props.setRunTest(this.state.nameTest);
    this.props.setTimeLastTest(time, this.state.keys);
    this.props.getTimeTest('Working...', this.state.keys);
    console.log(this.state.keys);
    this.toggleT();
    socket.emit('SC_BACKUP_TIMELASTTEST', this.state.timeLastTest);
    socket.emit('SC_RUN_LaravelDusk', { nameTest : this.state.nameTest, keys : this.state.keys});
    socket.on('SC_STATUS_TEST_DATA', (data)=>{
      if(data.status === 'stop')
      {
        this.props.stopTest(this.state.nameTest);
        this.setState({
          status: data.status
        });
      }
      console.log(data.status);
    });
    // sendSocket();
  }
  
  componentDidUpdate(prevProps, prevState){
    if(prevProps.runTest !== this.props.runTest){
      this.setState({
        running: this.props.runTest.running,
        nameFile: this.props.runTest.nameTest,
        popoverOpenT: false,
        popoverOpenF: false,
      });
    }
    if(prevState.nameTest !== this.props.nameTest){
      // console.log(prevState.nameTest);
      this.setState({
        nameTest: this.props.nameTest,
        keys: this.props.keys,
        timeLastTest: this.props.backup.timeLastTest
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
      getTimeTest: getTimeTest
    }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (RunTestConf);
