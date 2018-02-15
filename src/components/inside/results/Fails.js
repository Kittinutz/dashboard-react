import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

class Fails extends Component {
  render() {
    return (
        <div className="col-md-4">
            <Card className="rs-body-out bg-dark rs-card-fails">
                <CardHeader className="rs-card-out-fials">
                    <CardTitle className="rs-headr-text">- F a i l s -</CardTitle> 
                </CardHeader>
                <CardBody className="rs-card-out-fials"> 
                    <CardText className="rs-body-text">
                        0
                    </CardText>
                </CardBody>
                <CardFooter className="rs-card-out-fials"> </CardFooter>
            </Card>
        </div>
    );
  }
}

export default Fails;
