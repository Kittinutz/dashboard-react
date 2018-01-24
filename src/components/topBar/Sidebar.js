import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
        <div className="edit">
            <ul className="navbar-nav bg-dark navbar-sidenav sdow-sidenav">
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                <a className="nav-link" >
                  <i className="fa fa-fw fa-dashboard"></i>
                  <span className="nav-link-tx">Dashboard</span>
                </a>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                <a className="nav-link" >
                  <i className="fa fa-fw fa-area-chart"></i>
                  <span className="nav-link-tx">Projects</span>
                </a>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                <a className="nav-link" >
                  <i className="fa fa-fw fa-table"></i>
                  <span className="nav-link-tx">Test Table</span>
                </a>
              </li>     
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
                <a className="nav-link">
                  <i className="fa fa-fw fa-link"></i>
                  <span className="nav-link-tx">Results Test</span>
                </a>
              </li>
            </ul>
        </div>
    );
  }
}

export default Sidebar;
