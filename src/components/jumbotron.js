import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

import webinarImg from "../images/webinar.svg"
import certificateImg from "../images/course.svg"
import bundleImg from "../images/bundle.svg"

const JumboTron = (props) => {
  return (
      <Jumbotron fluid>
        <Container fluid>
          <Row className={"align-items-center h-100"}>
            <Col md={{size: 3}}>
              <h2>e-Campus corsi in digitale</h2>
              <p className={"text-muted"} style={{fontStyle: "italic", fontSize: "80%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col md={{size: 3}}>
              <div className={"jumbotrone-header-element"}>
                <img src={webinarImg}/>
                <h3>WEBINAR</h3>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
            </Col>
            <Col md={{size: 3}}>
              <div className={"jumbotrone-header-element"}>
                <img src={certificateImg}/>
                <h3>CERTIFICATI</h3>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
            </Col>
            <Col md={{size: 3}}>
              <div className={"jumbotrone-header-element"}>
                <img src={bundleImg}/>
                <h3>BUNDLE</h3>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
  );
};

export default JumboTron;