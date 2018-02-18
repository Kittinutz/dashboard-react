import React, { Component } from 'react';
import { Card, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

class Error extends Component {
  render() {
    return (
        <div className="col-md-4">
            <Card className="rs-body-out bg-dark rs-card-error">
                <CardBody className="rs-card-out-error"> 
                    <CardTitle className="rs-headr-text">- E r r o r -</CardTitle> 
                    <CardText>
                        0
                    </CardText>
                </CardBody>
                <CardFooter className="rs-card-out-error"> </CardFooter>
            </Card>
        </div>
    );
  }
}

export default Error;
