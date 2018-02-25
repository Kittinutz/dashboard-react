import React, { Component } from 'react';
import {socket} from '../SocketIO';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import {setNewPJs} from '../../actions/TesterAction';

class Sidebar extends Component {

    constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    // this.selectPJs = this.selectPJs.bind(this);
    this.state = {
      projects: null,
      dropdownOpen: false
    };
  }

  render() {
    const listPJs = this.props.getInfo.listPJs.map((namePJ, i) =>{
      if(namePJ === null){
        return "Not Found You Test Driven."
      }
      else{
        return (
          <DropdownItem key={i} onClick={this.selectPJs.bind(this, namePJ)}>{namePJ}</DropdownItem>
        )
      }
    });
    return (
        <div>
            <ul className="navbar-nav bg-dark navbar-sidenav sdow-sidenav">
              <ButtonGroup className="nav-item" vertical>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle  className="bg-vdark bt-bth" caret>
                  Select Your Test Driven
                  </DropdownToggle>
                  <DropdownMenu>
                    {listPJs}
                  </DropdownMenu>
                </ButtonDropdown>
                <Button className="bg-vdark bt-btg">Dashboard</Button>
                <Button className="bg-vdark bt-btg">Test Engine</Button>
                <Button className="bg-vdark bt-btg">Case Lists</Button>
              </ButtonGroup>
            </ul>
        </div>
    );
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  selectPJs(namePJ){
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
