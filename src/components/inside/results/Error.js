import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

class Error extends Component {
  render() {
    return (
        <div className="col-md-4">
            <Card className="rs-body-out bg-dark rs-card-error">
                <CardBody className="rs-card-out-error"> 
                    <CardTitle className="rs-headr-text">- E r r o r -</CardTitle> 
                    <div className="rs-body-text" >
                         <p className="big">{this.props.err}</p> <p className="sm"> / {this.props.sum} </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
  }
}

export default Error;
