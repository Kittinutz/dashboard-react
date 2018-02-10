import React, { Component } from 'react';
import {socket} from '../SocketIO';
// import {connect} from "react-redux";
import { 
   Button, Popover, PopoverBody, PopoverHeader
 } from 'reactstrap';

class ReadFileConf extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      data: 'Loading...',
      intervalID: null
    };
  }
  
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
      data: 'Loading...'
    });
      socket.emit('read-logfiles', this.props.namelog);
      socket.on('client-read', (logData)=>{
        setTimeout(()=>{
          this.setState({
            data: logData
          });
        }, 250)
      });
  }

  render() {
    return (
        <div>  
            <Button id={this.props.namelog+'Read'} color="info" className="btn-table" onClick={this.toggle}>info</Button>
            <Popover target={this.props.namelog+'Read'} placement="left" isOpen={this.state.popoverOpen}  toggle={this.toggle}>
                <PopoverHeader> {this.props.namelog}.log </PopoverHeader>
                <PopoverBody>  
                  {this.state.data}
                </PopoverBody>
            </Popover>
        </div>
    );
  }
}
export default ReadFileConf;
