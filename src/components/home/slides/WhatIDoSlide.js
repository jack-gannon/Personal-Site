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
        <SectionHeader>What I Do</SectionHeader>

        <Grid>
          <Service>
            <ServiceHeader>Web Development</ServiceHeader>
            <Description>
              I use the latest web technologies to build performant websites and
              web applications.
            </Description>
            <LearnMoreDesktop to="/about/skills-services">
              Learn More
            </LearnMoreDesktop>
          </Service>
          <Service>
            <ServiceHeader>UX Design</ServiceHeader>
            <Description>
              I research users and apply that knowledge to create meaningful
              digital experiences.
            </Description>
            <LearnMoreDesktop to="/about/skills-services#ux-skills">
              Learn More
            </LearnMoreDesktop>
          </Service>
          <Service>
            <ServiceHeader>UI Design</ServiceHeader>
            <Description>
              I design intuitive, easy-to-use interfaces that look great across
              all devices.
            </Description>
            <LearnMoreDesktop to="/about/skills-services#ui-skills">
              Learn More
            </LearnMoreDesktop>
          </Service>
        </Grid>
        <LearnMoreMobile to="/about/skills-services">
          Learn More
        </LearnMoreMobile>
      </Contents>
    </Slide>
  )
}

const slideIn = keyframes`
0% {
  opacity: 0;

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
  width: 70%;
  @media (min-width: ${breakpoints.tablet.small}) {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 2rem;
    width: 100%;
  }
`

const Service = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 2px;
  opacity: 0;
  animation: ${slideIn} 0.5s ease;
  animation-fill-mode: both;

  &:first-child {
    animation-delay: 1s;
  }

  &:nth-child(2) {
    animation-delay: 1.125s;
  }

  &:last-child {
    animation-delay: 1.25s;
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 70%;
    margin-bottom: 0rem;
  }
`

const ServiceHeader = styled.h3`
  margin-bottom: 0.5rem;
  position: relative;

  &:after {
    content: " ";
    position: absolute;
    bottom: -0.5rem;
    left: 0rem;
    width: 100%;
    height: 1px;
    background-color: ${colors.gray30};
  }
`

const Description = styled.p`
  width: 100%;
  font-size: 0.875rem;
  text-align: justify;
  margin-bottom: 0rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1.2rem;
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

const LearnMoreDesktop = styled(Link)`
  display: none;
  font-size: 0.75rem;
  font-weight: 800;

  opacity: 0;
  color: ${colors.gray60};
  font-family: "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  animation: ${slideIn} 0.5s ease;
  animation-fill-mode: both;
  animation-delay: 1.5s;

  @media (min-width: ${breakpoints.tablet.small}) {
    display: inline;
  }
`

const LearnMoreMobile = styled(Link)`
  font-size: 0.75rem;
  font-weight: 800;

  opacity: 0;
  color: ${colors.gray60};
  font-family: "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  animation: ${slideIn} 0.5s ease;
  animation-fill-mode: both;
  animation-delay: 1.5s;

  @media (min-width: ${breakpoints.tablet.small}) {
    display: none;
  }
`

const SectionHeader = styled.h2`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 4rem;
  }
`

export default FeaturedProjectsSlide
