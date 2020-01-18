import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/colors"
import { breakpoints } from "../utils/breakpoints"
import Button from "./button"
import Typist from "react-typist"

const Hero = () => {
  const Hero = styled.div`
    background-color: #222;
    margin-top: 0rem;
    height: 90vh;
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
  const Subheader = styled.p`
    font-family: "IBM Plex Mono", monospace;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.075rem;
    line-height: 1.5em;
    color: #eaeaea;
    width: calc(100% - 1rem);

    @media only screen and (min-width: ${breakpoints.desktop.medium}) {
      font-size: 1.25rem;
    }
  `
  const CustomTypist = styled(Typist)`
    & .Cursor {
      display: inline-block;
      color: ${colors.primary};

      &--blinking {
        opacity: 1;
        animation: blink 1s linear infinite;
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      }
    }
  `

  return (
    <Hero>
      <MainText>
        <Title>
          <Eyebrow>My Name is</Eyebrow>
          <br />
          Jack Gannon.
        </Title>
        <Subheader>
          <CustomTypist cursor={{ blink: true }}>
            <Typist.Delay ms={2000} />
            <span>I am a designer and developer based in Phoenix, AZ.</span>
            <Typist.Backspace count={49} delay={3000} />
            <span> help teams build products that their users love.</span>
            <Typist.Backspace count={48} delay={3000} />
            <span> craft meaningful user-experiences.</span>
            <Typist.Backspace count={36} delay={3000} />
            <span> build beautiful user-interfaces.</span>
          </CustomTypist>
        </Subheader>
        <Button background={colors.primary} radius={"2px"} color="#222">
          Contact Me
        </Button>
      </MainText>
    </Hero>
  )
}

export default Hero
