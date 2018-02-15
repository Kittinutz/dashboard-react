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
    // if(this.props.timeTesy === this.props.backup.timeTest){
    //   console.log("sdsds")
    // }
    // // console.log(this.state);
    // console.log(prevProps.backup.timeTest[this.props.keys]);
    // console.log('p['+this.props.keys+'] : ' +this.props.backup.timeTest[this.props.keys]);
    // console.log('prep['+this.props.keys+'] : '+prevProps.backup.timeTest[this.props.keys]);
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
