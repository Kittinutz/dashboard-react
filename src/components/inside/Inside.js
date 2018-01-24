import React, { Component } from 'react';

import Maincase from './Maincase';

class Inside extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container-fluid">    
          <Maincase />
          <div className="row">
          </div>
        </div>
      </div>
    );
  }
}

export default Inside;
