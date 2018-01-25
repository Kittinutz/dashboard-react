import React, { Component } from 'react';
// import {connect} from "react-redux";

import Topbar from './topBar/Topbar';
import Inside from './inside/Inside'
// for top css

class App extends Component {
  
  render() {
    return (
      <div className="bg-vdark v-full tx-white">
        <Topbar />
        <Inside />
      </div>
    );
  }
}

export default App;

