import React, { Component } from 'react';
import {socket} from '../SocketIO';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Collapse, ButtonGroup, Button} from 'reactstrap';

import Menu from './sidebar-menu/Menu';

import {setNewPJs} from '../../actions/TesterAction';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      projects: null,
      collapse: false
    };
  }

  render() {
    const listPJs = this.props.getInfo.listPJs.map((namePJ, i) =>{
      if(namePJ === null){
        return "Not Found You Test Driven."
      }
      else{
        return (
          <Button className="menu-pjs" key={i} onClick={this.selectPJs.bind(this, namePJ)}>{namePJ}</Button>
        )
      }
    });
    
    return (
        <div>
            <ul className="navbar-nav bg-dark navbar-sidenav sdow-sidenav">
              <ButtonGroup className="nav-item" vertical>
                <Button onClick={this.toggle} className="bg-vdark bt-bth">
                  Choose! You Test Driven
                </Button>
                <Collapse className="menu-pjs" isOpen={this.state.collapse} >
                  {listPJs}
                </Collapse>
                <Menu className="nav-item"/>
              </ButtonGroup>
            </ul>
        </div>
    );
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  selectPJs(namePJ){
    this.toggle();
    this.props.setNewPJs(namePJ);
    socket.emit('SC_SENDNAMEPJs', namePJ);
    console.log('Selected : '+namePJ);  
  }

}

function mapStatetoProps(state){ 
  return {
    ...state,
    getInfo: state.getInfo
  }
}

function mapDispatchtoProps(dispatch){ 
  return bindActionCreators(
    {
      setNewPJs: setNewPJs
    }, dispatch)
}
export default connect(mapStatetoProps, mapDispatchtoProps) (Sidebar);
