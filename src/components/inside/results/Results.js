import React, { Component } from 'react';

import Pass from './Pass';
import Fails from './Fails';
import Error from './Error';

class Results extends Component {
  render() {
    return (
        <div className="container rs-pd-buttom">
          <div className="row">
            <Pass />
            <Fails />
            <Error />
          </div>
        </div>
    );
  }
}

export default Results;
