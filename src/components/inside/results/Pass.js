import React, { Component } from 'react';
import { Card, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

class Pass extends Component {
  render() {
    return (
        <div className="col-md-4">
            <Card className="rs-body-out bg-dark rs-card-pass">
                <CardBody className="rs-card-out-pass"> 
                    <CardTitle className="rs-headr-text">- P a s s -</CardTitle> 
                    <CardText>
                        0
                    </CardText>
                </CardBody>
                <CardFooter className="rs-card-out-pass"> </CardFooter>
            </Card>
        </div>
    );
  }
}

export default Pass;
