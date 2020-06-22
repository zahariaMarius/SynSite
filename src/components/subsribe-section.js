import React from "react"
import {
  Container,
  Row,
  Col
} from "reactstrap"
import SubscribeForm from "./subscribe_form"

const SubscribeSection = (props) => {
  return (
    <Container className={"subscribe-section"} fluid={true}>
      <Row>
        <Col className={"header text-center"} md={{size: 6, offset: 3}}>
          <h1>Partecipa ai corsi e pre-iscriviti</h1>
          <p className={"text-muted"}>Resta aggiornato sui prossimi corsi</p>
        </Col>
      </Row>
      <Row>
        <Col md={{size: 6, offset: 3}}>
          <SubscribeForm></SubscribeForm>
        </Col>
      </Row>
    </Container>
  )
}

export default SubscribeSection;