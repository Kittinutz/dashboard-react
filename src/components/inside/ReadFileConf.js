import React, { Component } from 'react';
import {socket} from '../socketIO';
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
      data: 'No!',
      intervalID: null
    };
  }
  
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
    if(this.state.data === 'No!'){
      socket.emit('read-logfiles', this.props.namelog);
      socket.on('client-read', (logData)=>{
        this.setState({
          data: logData
        });
      });
    }
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
