import React from "react"
import { Link } from "gatsby"
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
          <Project to="/portfolio/">
            <img src="./GatsbyScene.svg" alt="Gatsby Scene" />
          </Project>
          <Project to="/portfolio/">
            <img src="./GatsbyScene.svg" alt="Gatsby Scene" />
          </Project>
          <Project to="/portfolio/">
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
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${colors.gray10};

  @media (min-width: ${breakpoints.tablet.small}) {
    justify-content: center;
  }
`

const Grid = styled.div`
  margin-bottom: 1rem;
  width: 65%;
  @media (min-width: ${breakpoints.tablet.small}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`

const Project = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  line-height: 0rem;
  border-radius: 2px;
  border: 1px solid pink;
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

  & img {
    width: 100%;
    height: auto;
    border: 1px solid purple;
    margin-bottom: 0rem;
    transition: transform 0.25s ease, opacity 0.125s ease;

    &:hover {
      transform: translateY(-0.5rem);
      opacity: 0.8;
    }
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 100%;
    margin-bottom: 0rem;
  }
`

const Contents = styled.div`
  width: 80%;
  height: calc(100% - 12rem);
  border: 1px solid pink;
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
