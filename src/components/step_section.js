import React from "react"
import {Parallax, Background} from "react-parallax"

import {
  Container,
  Row,
  Col
} from "reactstrap"

import image from "../images/georgie-cobbs-muOHbrFGEQY-unsplash.jpg"

const StepSection = (props) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={600}
    >
      <Container fluid={true} style={{ height: '60vh' }} >
        <Row className={"h-100"}>
          <Col>
            <h2></h2>
          </Col>
          <Col>
            <h2></h2>
          </Col>
          <Col>
            <h2></h2>
          </Col>
        </Row>
      </Container>
    </Parallax>
  )
}

export default StepSection;