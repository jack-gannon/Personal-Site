import React from "react"
import styled, { keyframes } from "styled-components"
import { rhythm } from "../../../utils/typography"
import { colors } from "../../../utils/colors"
import { breakpoints } from "../../../utils/breakpoints"

const IntroSlide = () => {
  return (
    <Slide>
      <Contents>
        <Eyebrow>My name is </Eyebrow>
        <IntroHeader>Jack Gannon</IntroHeader>
        <p>I'm a developer and designer based in Phoenix, AZ.</p>
        <Contact>Contact Me</Contact>
      </Contents>
    </Slide>
  )
}

const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(8rem);
}
100% {
  opacity: 1;
  transform: translateY(0rem);
  
}
`

const Slide = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${colors.gray90};
`

const Contents = styled.div`
  width: 70%;
  margin-left: 1rem;
  color: ${colors.gray10};
  animation: ${fadeIn} 1s ease;

  @media (min-width: ${breakpoints.tablet.small}) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: ${rhythm(40)};
  }
`

const Eyebrow = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1.25rem;
  }
`

const IntroHeader = styled.h1`
  color: ${colors.gray10};
  font-size: 3rem;
  margin-bottom: 0.5rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 8rem;
    width: 60%;
    line-height: 7rem;
  }
`

const Contact = styled.button`
  background-color: ${colors.primary};
  border: none;
  border-radius: 2px;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 600;
  color: ${colors.gray80};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
`

export default IntroSlide
