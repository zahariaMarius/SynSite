import React from "react"

//import styles
import "bootstrap/dist/css/bootstrap.min.css"
import "../style/style.scss"

//import components
//import bootstrap components
import Header from "../components/header"
import Jumbotron from "../components/jumbotron"
import Carousel from "../components/carousel"
import Footer from "../components/footer"
import CourseSection from "../components/corse_section"
import SubscribeSection from "../components/subsribe-section"
import StepSection from "../components/step_section"

const IndexPage = () => (
  <div>
    <Header></Header>
    <Carousel></Carousel>
    <Jumbotron></Jumbotron>
    <CourseSection></CourseSection>
    <StepSection></StepSection>
    <SubscribeSection></SubscribeSection>
    <Footer></Footer>
      <script src={"src/script.js"}></script>
  </div>
)

export default IndexPage
