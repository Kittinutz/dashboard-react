import React, { Component } from 'react'
import {connect} from "react-redux";

class SetTimeTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeTest : this.props.timeTest
    };
  }
  render() {
    return (
      <p> 
        {this.state.timeTest}
      </p>
    );
  }

  componentWillUpdate(prevProps, prepState){
    this.setState({
      timeTest : this.props.timeTest
    })
  }
}

function mapStatetoProps(state){ 
  return {
    ...state,
    backup: state.backup
  }
}

export default connect(mapStatetoProps) (SetTimeTest);
