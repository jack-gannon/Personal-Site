import React from "react"
import styled, { keyframes } from "styled-components"
import { rhythm } from "../../../utils/typography"
import { colors } from "../../../utils/colors"
import { breakpoints } from "../../../utils/breakpoints"

const FeaturedProjectsSlide = () => {
  return (
    <Slide>
      <Contents>
        <IntroHeader>Featured Projects</IntroHeader>

        <Grid>
          <Project>
            <img src="./GatsbyScene.svg" alt="Gatsby Scene" />
          </Project>
          <Project>
            <img src="./GatsbyScene.svg" alt="Gatsby Scene" />
          </Project>
          <Project>
            <img src="./GatsbyScene.svg" alt="Gatsby Scene" />
          </Project>
        </Grid>
      </Contents>
    </Slide>
  )
}

const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: scale(.5, .5);

}
100% {
  opacity: 1;
}
`

const Slide = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  background-color: ${colors.gray10};

  @media (min-width: ${breakpoints.tablet.small}) {
    justify-content: center;
  }
`

const Grid = styled.div`
  margin-bottom: 1rem;
  @media (min-width: ${breakpoints.tablet.small}) {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 1rem;
  }
`

const Project = styled.div`
  width: 65%;
  margin-bottom: 1rem;
  background-color: ${colors.gray30};
  border-radius: 2px;
  opacity: 0;
  transition: all 0.25s ease;
  animation: ${fadeIn} 0.5s ease;
  animation-fill-mode: both;

  &:first-child {
    animation-delay: 1s;
  }

  &:nth-child(2) {
    animation-delay: 1.125s;
  }

  &:last-child {
    animation-delay: 1.25s;
    margin-bottom: 0rem;
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 100%;
    margin-bottom: 0rem;
  }
`

const Contents = styled.div`
  width: 80%;
  margin-left: 1rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: ${rhythm(40)};
  }
`

const IntroHeader = styled.h2`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1rem;
    text-align: center;
  }
`

export default FeaturedProjectsSlide
