import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Topbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top t-nav sdow-nav" id="mainNav">
          <button className="navbar-toggler navbar-toggler-right" 
            type="button" 
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" 
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav-name">
            <a dusk="laravel">ROWater : Web Tester</a>
          </div>
          <div className="collapse bg-dark navbar-collapse">
            <Sidebar />
          </div>
        </nav>
      </div>
    );
  }
}

export default Topbar;
