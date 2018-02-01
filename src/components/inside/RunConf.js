import React, { Component } from 'react';
import {socket} from '../socketIO';
import { 
   Button, Popover, PopoverBody, PopoverHeader
 } from 'reactstrap';

 
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
  
  run1Test(){
    this.toggle();
    // socket.emit('run test');
  }

  render() {
    return (
        <div>  
            {/* <Button color="danger" className="btn-table" onClick={this.runTest.bind(this)}>RUN</Button> */}
            <Button id={this.props.nameTest} color="danger" className="btn-table" onClick={this.toggle}>RUN</Button>
            <Popover target={this.props.nameTest} placement="bottom" isOpen={this.state.popoverOpen}  toggle={this.toggle}>
                <PopoverHeader> {this.props.nameTest}</PopoverHeader>
                <PopoverBody>  
                    <Button color="success" className="btn-table"  
                      onClick={this.run1Test.bind(this)}
                    > Yes</Button>

                    <Button className="btn-table "
                      onClick={this.toggle}
                    >No</Button>
                </PopoverBody>
            </Popover>
        </div>
    );
  }
}

export default RunConf;
