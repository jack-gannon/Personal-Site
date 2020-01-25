import React from "react"
import SectionHeader from "./SectionHeader"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import { colors } from "../../utils/colors"
import { rhythm } from "../../utils/typography"
import FeaturedProject from "./FeaturedProject"
import { Link } from "gatsby"

class FeaturedProjects extends React.Component {
  render() {
    return (
      <Projects style={{ position: "relative" }}>
        <SectionHeader title="Featured Projects" />
        <Line viewBox="0 0 100 100" preserveAspectRatio="none">
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="100"
            vectorEffect="non-scaling-stroke"
          />
        </Line>

        <Grid>
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
        </Grid>
        <PortfolioPrompt>
          <PortfolioLink>Go to portfolio</PortfolioLink>
        </PortfolioPrompt>
        <BottomLine viewBox="0 0 100 100" preserveAspectRatio="none">
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="100"
            vectorEffect="non-scaling-stroke"
          />
        </BottomLine>
      </Projects>
    )
  }
}
const Projects = styled.section`
  background-color: ${colors.gray20};
  padding-bottom: 4rem;
  margin-bottom: 4rem;

  @media (min-width: ${breakpoints.tablet.medium}) {
    padding-bottom: 12rem;
  }
`

const Grid = styled.div`

@media (min-width: ${breakpoints.tablet.medium}) {
display: grid;
grid-template-columns: auto auto auto;
border: 1px solid pink;
grid-gap: 1rem;
padding-right: 1rem;
padding-left: 1rem;
width: 100%;
margin-top: 16rem;
margin-left: auto;
margin-right: auto;
margin-bottom: 1rem;
max-width: ${rhythm(40)};

@media (min-width: ${breakpoints.desktop.small}) {
  padding: 0rem;
}

`

const Line = styled.svg`
  position: absolute;
  top: 4rem;
  width: 1rem;
  height: 100%;
  border: 1px solid pink;

  & line {
    stroke: ${colors.gray40};
    stroke-width: 2px;
    stroke-dasharray: 2 4;
  }

  @media (min-width: ${breakpoints.tablet.medium}) {
    width: 2rem;
    left: calc(50vw - 1rem);
    height: 12rem;
    top: 5rem;
    & line {
      stroke: ${colors.gray60};
      stroke-width: 3px;
      stroke-dasharray: 3 6;
    }
  }
`

const BottomLine = styled.svg`
  display: none;
  position: absolute;
  bottom: 2rem;
  width: 1rem;
  height: 100%;
  border: 1px solid pink;

  & line {
    stroke: ${colors.gray40};
    stroke-width: 2px;
    stroke-dasharray: 2 4;
  }

  @media (min-width: ${breakpoints.tablet.medium}) {
    display: block;
    width: 2rem;
    left: calc(50vw - 1rem);
    height: 8rem;
    & line {
      stroke: ${colors.gray60};
      stroke-width: 3px;
      stroke-dasharray: 3 6;
    }
  }
`

const PortfolioPrompt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Helvetica Neue", sans-serif;
  width: 100%;
  max-width: ${rhythm(40)};
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 1rem 2rem 1rem;
  background-color: ${colors.gray10};

  @media (min-width: ${breakpoints.tablet.medium}) {
    margin-left: 1rem;
    margin-right: 1rem;
    width: calc(100vw - 2rem);
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    margin-left: auto;
    margin-right: auto;
  }
`

const PortfolioLink = styled(Link)`
  text-transform: uppercase;
  border: 2px solid ${colors.gray60};
  color: ${colors.gray60};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  padding: 0.5rem 1rem;

  &:hover {
    border-color: ${colors.secondary};
    background-color: ${colors.secondary};
    color: #fff;
  }
`

export default FeaturedProjects
