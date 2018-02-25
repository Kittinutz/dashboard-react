import React, { Component } from 'react';
import {socket} from '../SocketIO';
// import {connect} from "react-redux";
import { 
   Button, Modal, ModalHeader, ModalBody, ModalFooter 
 } from 'reactstrap';

class ReadFileConf extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false,
      data: 'Loading...',
    };
  }

  render() {
    return (
        <div>
        <Button color="info" className="btn-table" onClick={this.toggle}>info</Button>
        <Modal className="read-set-layout" isOpen={this.state.modal} modalTransition={{ timeout: 5 }} backdropTransition={{ timeout: 10 }}
          toggle={this.toggle} >
          <ModalHeader className="bar-log bg-svdark" toggle={this.toggle}> {this.props.namelog}.log </ModalHeader>
          <ModalBody className="read-logfile">
           {/* log details */}
           {this.state.data}
          </ModalBody>
          <ModalFooter className="bar-log bg-svdark">
            <Button color="danger" className="btn-table" onClick={this.toggle}> close </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      data: 'Loading...'
    });
    socket.emit('read-logfiles', this.props.namelog);
    socket.on('client-read', (logData)=>{
      setTimeout(()=>{
        this.setState({
          data: logData
        });
      }, 500)
    });
  }
}
export default ReadFileConf;
