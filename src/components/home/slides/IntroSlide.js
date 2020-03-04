import React, { useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../../../utils/typography"
import { colors } from "../../../utils/colors"
import { breakpoints } from "../../../utils/breakpoints"
import BackgroundImg from "../../../../content/assets/hero.jpg"

const IntroSlide = () => {
  // Handles focus once component is rendered
  let introSlideContents = React.createRef()
  useEffect(() => {
    introSlideContents.current.focus()
  })

  return (
    <Slide>
      <Contents ref={introSlideContents}>
        <Eyebrow>My name is </Eyebrow>
        <IntroHeader>Jack Gannon</IntroHeader>
        <Subheader>
          I am a designer and developer based in Phoenix, AZ.
        </Subheader>
        <Contact to="/contact">Contact Me</Contact>
      </Contents>
    </Slide>
  )
}

const slideUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(8rem);
}
100% {
  opacity: 1;
  transform: translateY(0rem);
}
`

const slideAndFadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateX(4rem);
}
100% {
  opacity: 1;
  transform: translateX(0rem);
  
}
`

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

const elongate = keyframes`
0% {
  transform: scaleX(0);
}
100% {
  transform: scaleX(1);
}
`

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`

const Contents = styled.div`
  width: 80%;
  margin-left: 1rem;
  color: ${colors.gray10};
  animation: ${slideUp} 1s ease;

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 100%;
    margin-left: 2rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
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
  position: relative;
  color: ${colors.gray10};
  font-size: 3.5rem;
  line-height: 0.875em;
  margin-bottom: 1rem;
  animation: ${slideAndFadeIn} 1s ease;
  animation-delay: 1s;
  animation-fill-mode: both;

  &:after {
    content: " ";
    position: absolute;
    bottom: -0.75rem;
    left: 0rem;
    height: 2px;
    background-color: ${colors.primary};
    width: 4.5rem;
    transform-origin: left;
    animation: ${elongate} 0.25s ease;
    animation-delay: 2s;
    animation-fill-mode: both;
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 6rem;
    width: 70%;
    line-height: 5rem;
    margin-bottom: 1.5rem;

    &:after {
      width: 9rem;
      bottom: -0.875rem;
    }
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    font-size: 8rem;
    width: 60%;
    line-height: 7rem;
    margin-bottom: 1.75rem;
  }
`

const Subheader = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  line-height: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: 0.125em;
  animation: ${fadeIn} 0.25s ease;
  animation-delay: 2s;
  animation-fill-mode: both;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1.5rem;
    width: 60%;
    margin-bottom: 1.5rem;
    line-height: 2.25rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    font-size: 1.5rem;
    width: 80%;
    margin-bottom: 1.5rem;
  }
`

const Contact = styled(Link)`
  background-color: ${colors.primary};
  border: none;
  border-radius: 2px;
  display: block;
  width: 9rem;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 600;
  color: ${colors.gray80};
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.05rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  animation: ${fadeIn} 0.25s ease;
  animation-delay: 2s;
  animation-fill-mode: both;

  &:hover {
    background-color: ${colors.primaryLight};
    cursor: pointer;
  }
`

export default IntroSlide
