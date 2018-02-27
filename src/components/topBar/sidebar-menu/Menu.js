import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, 
    // TabContent, TabPane, NavLink
} from 'reactstrap';

import {setMenuTap} from '../../../actions/TesterAction';

class Menu extends Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: this.props.runTest.tabID
        };
    }
    componentDidUpdate(){
        if(this.props.runTest.tabID !== this.state.activeTab){
            this.setState({
                activeTab: this.props.runTest.tabID
            })
        }
    }
    
    render() {
        return (
            <div className="menubar-item">
                <div    
                    onClick={() => { this.toggle('1'); }}
                    ><Button className="bg-vdark bt-btg dashboard">Dashboard</Button> 
                </div>
                <div               
                    onClick={() => { this.toggle('2'); }}
                    ><Button className="bg-vdark bt-btg test-engine">Test Engine</Button> 
                </div>
                <div               
                    onClick={() => { this.toggle('3'); }}
                    ><Button className="bg-vdark bt-btg case-lists">Case Lists</Button> 
                </div>
            </div>
        )
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.props.setMenuTap(tab);
        }
    }
}

function mapStatetoProps(state){ 
    return {
        ...state,
        runTest: state.runTest
    }
}

function mapDispatchtoProps(dispatch){ 
    return bindActionCreators(
        {
            setMenuTap: setMenuTap
        }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps) (Menu);
