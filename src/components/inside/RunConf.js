import React, { Component } from 'react'
import { 
   Button, Popover, PopoverBody, PopoverHeader
 } from 'reactstrap';

import io from 'socket.io-client';
const socket = io.connect('localhost:4000');

class RunConf extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  runTest(){
    this.toggle();
    socket.emit('run test');
  }


  render() {
    return (
        <div>  
            {/* <Button color="danger" className="btn-table" onClick={this.runTest.bind(this)}>RUN</Button> */}
            <Button id="Popover1" color="danger" className="btn-table" onClick={this.toggle}>RUN</Button>
            <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen}  toggle={this.toggle}>
                <PopoverHeader> Are you sure?</PopoverHeader>
                <PopoverBody>  
                    <Button color="success" className="btn-table"  onClick={this.runTest.bind(this)}> Yes</Button>
                </PopoverBody>
            </Popover>
        </div>
    );
  }
}

export default RunConf;
