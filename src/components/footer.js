import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Footer = (props) => {
  return (
    <div className={"footer"}>
        <Container fluid>
          <Row>
            <Col className={"d-flex justify-content-center align-items-center"} md={{size: 4}}>Copyright 2020 @ SYNETICH S.r.l</Col>
            <Col className={"d-flex justify-content-center align-items-center"} md={{size: 4}}>DEMO PAGE</Col>
            <Col className={"d-flex justify-content-center align-items-center"} md={{size: 4}}>DEMO PAGE</Col>
          </Row>
        </Container>
    </div>
  );
};

export default Footer;