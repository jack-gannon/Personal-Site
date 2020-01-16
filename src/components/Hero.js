import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/colors"
import { breakpoints } from "../utils/breakpoints"
import Button from "./button"

const Hero = () => {
  const Hero = styled.div`
    background-color: #222;
    margin-top: 0rem;
  `

  const MainText = styled.div`
    margin-left: 1rem;
    margin-right: auto;
    padding-top: 25vh;
    padding-bottom: 20vh;
    max-width: ${rhythm(40)};

    @media only screen and (min-width: ${breakpoints.desktop.medium}) {
      margin-left: auto;
    }
  `

  const Eyebrow = styled.span`
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    line-height: 1rem;
    padding: 0.25rem 0.5rem;

    @media only screen and (min-width: ${breakpoints.desktop.medium}) {
      font-size: 1.5rem;
    }
  `

  const Title = styled.h1`
    font-size: 4rem;
    line-height: 3.5rem;
    margin-bottom: 1rem;
    width: 80%;
    color: #eaeaea;

    @media only screen and (min-width: ${breakpoints.desktop.medium}) {
      font-size: 8rem;
      width: 60%;
      line-height: 7rem;
    }
  `

  const Divider = styled.hr`
    border-bottom: dotted 4px #fff;
    margin-bottom: 0.75rem;
    opacity: 0.2;
    width: 90%;
  `

  const Subheader = styled.p`
    font-family: "Source Code Pro", monospace;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #eaeaea;
    width: 90%;
  `

  return (
    <Hero>
      <MainText>
        <Title>
          <Eyebrow>My Name is</Eyebrow>
          <br />
          Jack Gannon.
        </Title>
        <Divider />
        <Subheader>
          I am a Designer & Developer based out of Phoenix, Arizona. I
        </Subheader>
        <Button background={colors.primary} radius={"2px"} color="#222">
          Contact Me
        </Button>
      </MainText>
    </Hero>
  )
}

export default Hero
