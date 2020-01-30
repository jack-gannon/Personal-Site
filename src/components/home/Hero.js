import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { rhythm } from "../../utils/typography"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"
import Typist from "react-typist"

class Hero extends React.Component {
  render() {
    return (
      <HeroContainer>
        <MainText>
          <Title>
            <Eyebrow>My Name is</Eyebrow>
            <br />
            Jack Gannon.
          </Title>
          <Subheader>
            <CustomTypist cursor={{ blink: true }} avgTypingDelay={50}>
              <Typist.Delay ms={2500} />
              <span>I am a designer and developer based in Phoenix, AZ.</span>
              <Typist.Backspace count={49} delay={3000} />
              <span> help teams build products that their users love.</span>
              <Typist.Backspace count={48} delay={3000} />
              <span> craft meaningful user experiences.</span>
              <Typist.Backspace count={36} delay={3000} />
              <span> build beautiful user interfaces.</span>
              <Typist.Backspace count={33} delay={3000} />
              <span>am a designer and developer based in Phoenix, AZ.</span>
            </CustomTypist>
          </Subheader>
          <PrimaryButton
            background={colors.primary}
            radius={"2px"}
            color="#222"
          >
            Contact Me
          </PrimaryButton>
        </MainText>
      </HeroContainer>
    )
  }
}

const slideLeft = keyframes`
0%{
  transform: translateX(8rem);
  opacity: 0;
}
100% {
  transform: translateX(0rem);
  opacity: 1;
}
`

const slideRight = keyframes`
from {
  transform: translateX(-4rem);
  opacity: 0;
}
to {
  transform: translateX(0rem);
  opacity: 1;
}
`

const elongate = keyframes`
0% {
  left: 36rem;
  transform: scaleX(.25);
}
30% {
  transform: scaleX(.0125);
}
40% {
  left: 0rem;
  transform: scaleX(0);
}
50% {
  transform: scaleX(1);
}
100% {
  transform: scaleX(1);
}
`

const fadeIn = keyframes`
0% {
  opacity: 0;
}
70% {
 opacity: 0;
}
100% {
  opacity: 1;
}
`

const HeroContainer = styled.div`
  background-color: ${colors.gray90};
  margin-top: 0rem;
  height: 90vh;
  overflow: hidden;
`

const MainText = styled.div`
  position: relative;
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
  animation: ${slideRight} 0.75s ease-in-out;

  @media only screen and (min-width: ${breakpoints.desktop.medium}) {
    font-size: 1.5rem;
  }
`

const Title = styled.h1`
  display: block;
  position: relative;
  font-size: 4rem;
  line-height: 3.5rem;
  margin-bottom: 2rem;
  width: 80%;
  color: #eaeaea;
  animation: ${slideLeft} 0.75s ease-in-out;

  &:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -1rem;
    background-color: ${colors.primary};
    width: 1.125em;
    height: 4px;
    transform-origin: left;
    animation: ${elongate} 1.5s ease-in-out;
  }

  @media only screen and (min-width: ${breakpoints.desktop.medium}) {
    font-size: 8rem;
    width: 60%;
    line-height: 7rem;

    &:after {
      width: 1.125em;
    }
  }
`
const Subheader = styled.div`
  font-family: "IBM Plex Mono", monospace;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.075rem;
  line-height: 1.5em;
  color: #eaeaea;
  width: calc(100% - 1rem);
  min-height: 48px;
  max-height: 48px;
  animation: ${fadeIn} 2s ease-in-out;

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

const PrimaryButton = styled.button`
  position: absolute;
  display: block;
  bottom: 4rem;
  color: ${colors.gray90};
  background-color: ${colors.primary};
  border: none;
  border-radius: 2px;
  font-family: "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05rem;
  padding: 0.5rem 1rem;
  animation: ${fadeIn} 1s ease-in-out;

  @media only screen and (min-width: ${breakpoints.desktop.medium}) {
    bottom: 9rem;
  }

  @media only screen and (min-width: ${breakpoints.desktop.large}) {
    bottom: 13rem;
  }
`

export default Hero
