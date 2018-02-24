import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Sidebar extends Component {

    constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.selected = this.selected.bind(this);
    this.state = {
      projects: null,
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
        <div>
            <ul className="navbar-nav bg-dark navbar-sidenav sdow-sidenav">
              <ButtonGroup className="nav-item" vertical>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle  className="bg-vdark bt-bth" caret>
                  Select Your Test Driven
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                <Button className="bg-vdark bt-btg">1</Button>
                <Button className="bg-vdark bt-btg">2</Button>
              </ButtonGroup>
            </ul>
        </div>
    );
  }
}

export default Sidebar;
