import React from "react"
import SectionHeader from "./SectionHeader"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import { colors } from "../utils/colors"
import { rhythm } from "../utils/typography"
import FeaturedProject from "./FeaturedProject"

class FeaturedProjects extends React.Component {
  render() {
    return (
      <Projects style={{ position: "relative" }}>
        <Line viewBox="0 0 100 100" preserveAspectRatio="none">
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="100"
            vectorEffect="non-scaling-stroke"
          />
        </Line>
        <LeftArm viewBox="0 0 32 16" preserveAspectRatio="none">
          <polyline
            points="31.5,0.5 1.5,0.5 1.5,15.5 "
            vectorEffect="non-scaling-stroke"
          />
        </LeftArm>
        <RightArm viewBox="0 0 32 16" preserveAspectRatio="none">
          <polyline
            points="0.5,0.5 30.5,0.5 30.5,15.5 "
            vectorEffect="non-scaling-stroke"
          />
        </RightArm>
        <SectionHeader title="Featured Projects" />
        <Grid>
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
        </Grid>
        <div style={{ height: "100vh" }}></div>
      </Projects>
    )
  }
}
const Projects = styled.section``
const Grid = styled.div`

@media (min-width: ${breakpoints.desktop.small}) {
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 1rem;
width: 100%;
margin-top: 16rem;
margin-left: auto;
margin-right: auto;
max-width: ${rhythm(40)};
`

const Line = styled.svg`
  position: absolute;
  top: 4rem;
  width: 2rem;
  height: 100%;

  & line {
    stroke: ${colors.gray40};
    stroke-width: 2px;
    stroke-dasharray: 2 4;
  }

  @media (min-width: ${breakpoints.tablet.medium}) {
    left: calc(50vw - 1rem);
    height: 10%;
    & line {
      stroke: ${colors.gray60};
      stroke-width: 3px;
      stroke-dasharray: 3 6;
    }
  }
`

const LeftArm = styled.svg`
  fill: none;
  position: absolute;

  & line {
    stroke: ${colors.gray40};
    stroke-width: 2px;
    stroke-dasharray: 2 4;
  }

  @media (min-width: ${breakpoints.tablet.medium}) {
    top: 5%;
    width: calc(${rhythm(20)} - ${rhythm(6)});
    height: 9%;
    right: calc(50vw);

    & polyline {
      stroke: ${colors.gray60};
      stroke-width: 3px;
      stroke-dasharray: 3 6;
    }
  }
`

const RightArm = styled.svg`
  fill: none;
  position: absolute;

  & polyline {
    stroke: ${colors.gray40};
    stroke-width: 2px;
    stroke-dasharray: 2 4;
  }

  @media (min-width: ${breakpoints.tablet.medium}) {
    top: 5%;
    width: calc(${rhythm(20)} - ${rhythm(6)});
    height: 9%;
    left: calc(50vw);

    & polyline {
      stroke: ${colors.gray60};
      stroke-width: 3px;
      stroke-dasharray: 3 6;
    }
  }
`

export default FeaturedProjects
