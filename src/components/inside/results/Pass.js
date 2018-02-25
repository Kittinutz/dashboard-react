import React, { Component } from 'react';
import { Card, CardBody, CardTitle} from 'reactstrap';

class Pass extends Component {
  render() {
    return (
        <div className="col-md-4">
            <Card className="rs-body-out bg-dark rs-card-pass">
                <CardBody className="rs-card-out-pass"> 
                    <CardTitle className="rs-headr-text">- P a s s -</CardTitle> 
                    <div className="rs-body-text" >
                         <p className="big">{this.props.pass}</p> <p className="sm"> / {this.props.sum} </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
  }
}

export default Pass;
