import React, { Component } from 'react';
import Index from './table-all-case/Index';

import Results from './results/Results';

class Inside extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Results />
        <div className="container-fluid">    
          <Index />     
        </div>
      </div>
    );
  }
}

export default Inside;
