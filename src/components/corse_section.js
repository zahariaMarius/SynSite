import React from "react"
import {
  Container,
  Row,
  Col
} from "reactstrap"
import CardCourse from "./card_course"

const courseCardData = {
  card1: {
    title: "formazione generale lavoratori per la sicurezza",
    text: "Formazione Generale rivolta a tutti i lavoratori per assolvere agli obblighi in materia di salute e sicurezza " +
      "Ai sensi dell'art. 37 del D.Lgs. n. 81/08 e s.m.i.",
    note: "Iscrizioni aperte"
  },
  card2: {
    title: "formazione lavoratori rischio basso",
    text: "E-learning Formazione Generale e Specifica per i lavoratori di aziende a rischio basso ai sensi dell'art. 37 " +
      "del Dlgs 81/08 così come definito dall'Accordo Stato Regioni del 21/12/11",
    note: "Iscrizioni aperte"
  },
  card3: {
    title: "aggiornamento per lavoratori per tutti i settori di rischio",
    text: "Aggiornamento per lavoratori ai sensi dell'art. 37 del D.Lgs. n. 81/08 e s.m.i. e dell'Accordo Stato Regioni del 21/12/11.",
    note: "Iscrizioni chiuse"
  },
  card4: {
    title: "formazione per preposti",
    text: "Formazione per Preposti (E-learning) Ai sensi dell'art. 37, comma 7 del D.Lgs. n. 81/08 e s.m.i., correttivo " +
      "D.Lgs. n. 106/09, Accordo Stato-Regioni, repertorio atti n. 221/CSR, del 21.12.2011 e Accordo Stato-Regioni, repertorio atti n. 128/CSR, del 7.7.2016.",
    note: "Disponibile dal 2021"
  },
  card5: {
    title: "aggiornamento per preposti",
    text: "Formazione per Preposti (E-learning) Ai sensi dell'art. 37, comma 7 del D.Lgs. n. 81/08 e s.m.i., correttivo " +
      "D.Lgs. n. 106/09, Accordo Stato-Regioni, repertorio atti n. 221/CSR, del 21.12.2011 e Accordo Stato-Regioni, repertorio atti n. 128/CSR, del 7.7.2016.",
    note: "Iscrizioni aperte"
  }
}

const CourseSection = (props) => {

  return (
    <Container className={"course-section"} fluid={true}>
      <Row className={"d-flex justify-content-center align-items-center"}>
          <CardCourse data={courseCardData.card1}></CardCourse>
          <CardCourse data={courseCardData.card2}></CardCourse>
          <CardCourse data={courseCardData.card3}></CardCourse>
      </Row>
      <Row className={"d-flex justify-content-center align-items-center"}>
          <CardCourse data={courseCardData.card4}></CardCourse>
          <CardCourse data={courseCardData.card5}></CardCourse>
      </Row>
    </Container>
  )
}

export default CourseSection