import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

class Fails extends Component {
  render() {
    return (
        <div className="col-md-4">
            <Card className="rs-body-out bg-dark rs-card-fails">
                <CardBody className="rs-card-out-fials"> 
                    <CardTitle className="rs-headr-text">- F a i l s -</CardTitle> 
                    <div className="rs-body-text" >
                         <p className="big">{this.props.fails}</p> <p className="sm"> / {this.props.sum} </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
  }
}

export default Fails;
