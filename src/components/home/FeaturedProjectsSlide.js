import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import { colors } from "../../utils/colors"

const FeaturedProjectsSlide = () => {
  return (
    <Slide>
      <IntroHeader>Featured Projects</IntroHeader>
      <p>Here's some cool projects i've been working on.</p>
      <button>Check it out</button>
    </Slide>
  )
}

const Slide = styled.section``

const IntroHeader = styled.h1``

export default FeaturedProjectsSlide
