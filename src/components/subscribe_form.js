import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

const SubscribeForm = (props) => {
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email - valida per la piattaforma e-learning</Label>
            <Input type="email" name="email" id="email" placeholder="Inserisci una email valida" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="telefono">Telefono</Label>
            <Input type="email" name="email" id="telefono" placeholder="Inserisci il tuo numero di telefono" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleAddress2">Indirizzo</Label>
            <Input type="text" name="address2" id="exampleAddress2" placeholder="via di residenza"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCity">Citta</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="citta di residenza"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">CAP</Label>
            <Input type="text" name="zip" id="exampleZip" placeholder="CAP"/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="CourseCheckbox">Seleziona i corsi di interesse</Label>
        <div>
          <CustomInput type="checkbox" id="CourseCheckbox1" label="Formazione generale lavoratori per la sicurezza" />
          <CustomInput type="checkbox" id="CourseCheckbox2" label="Formazione lavoratori rischio basso" />
          <CustomInput type="checkbox" id="CourseCheckbox3" label="Aggiornamento per lavoratori per tutti i settori di rischio" />
          <CustomInput type="checkbox" id="CourseCheckbox4" label="Formazione per preposti" />
          <CustomInput type="checkbox" id="CourseCheckbox5" label="Aggiornamento per preposti" />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Lascia una nota</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Row form>
        <Col>
          <Button color={"warning"} outline style={{width: "100%"}}>PRE-ISCRIVIMI</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SubscribeForm;