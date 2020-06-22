import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Button } from 'reactstrap';
/**
 * Bootstrap components
 */
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap"

const items = [
  {
    key: "sl01",
    caption: "La piattaforma di Synetich",
    altText: "passione e corsi di alta formazione"
  },
  {
    key: "sl02",
    caption: "e-Campus corsi professionali",
    altText: "più di 10.000 ore erogate"
  }
]

const CarouselComponent = (props) => {

  const data = useStaticQuery(graphql`
    query {
      sl01: file(relativePath: { eq: "slide0.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1920,
            maxHeight: 1000,
            quality: 100
            ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sl02: file(relativePath: { eq: "slide1.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1920,
            maxHeight: 1000,
            quality: 100
            ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }


  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}>
        <Img fluid={data[item.key].childImageSharp.fluid} alt={item.altText}/>
        <CarouselCaption captionText={item.altText} captionHeader={item.caption}/>
      </CarouselItem>
    )
  })

  return (
    <Carousel
      className={"carousel-fade"}
      interval={false}
      activeIndex={activeIndex}
      next={next}
      previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
      <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
    </Carousel>
  )
}

export default CarouselComponent