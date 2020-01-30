import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import { colors } from "../../utils/colors"

const BlogSlide = () => {
  return (
    <Slide>
      <Contents>
        <IntroHeader>From The Blog</IntroHeader>
        <p>Here's my latest post from the blog!</p>
        <button>Read More</button>
      </Contents>
    </Slide>
  )
}

const Slide = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.primaryLight};
`

const Contents = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
`

const IntroHeader = styled.h1``

export default BlogSlide
