import React from "react"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink, Container
} from "reactstrap"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

const CardCourse = (props) => {
  const data = props.data
  const image = useStaticQuery(graphql`
    query {
      test: file(relativePath: { eq: "test.jpg" }) {
        childImageSharp {
          fixed(
            width: 318
            height: 180,
            quality: 100
            ) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Card>
      <Img fixed={image.test.childImageSharp.fixed}/>
        <CardBody>
          <CardTitle>{data.title}</CardTitle>
          <CardText>{data.text}</CardText>
          <CardText>
            <small className="text-muted">{data.note}</small>
          </CardText>
        </CardBody>
      </Card>
  )
}

export default CardCourse