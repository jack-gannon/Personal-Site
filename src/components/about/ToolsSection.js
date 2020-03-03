import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"

const ToolsSection = ({ title, tools }) => {
  return (
    <Tools>
      <ToolHeader>{title}</ToolHeader>
      <Grid>
        {tools.map(tool => (
          <Tool key={tool.name}>
            <Logo src={tool.logo} alt={`${tool.name} logo`} />
            <h5>{tool.name}</h5>
            <p>{tool.description}</p>
          </Tool>
        ))}
      </Grid>
    </Tools>
  )
}

const Tools = styled.section`
  width: 100%;
  margin-bottom: 4rem;

  @media (min-width: ${breakpoints.desktop.small}) {
    display: grid;
    grid-template-columns: calc(25% - 0.5rem) calc(75% - 0.5rem);
    grid-gap: 1rem;
  }
`

const ToolHeader = styled.h4``

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: none;
  padding-bottom: 0.5rem;
  overflow-x: scroll;

  @media (min-width: ${breakpoints.desktop.small}) {
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 0.5rem;
  }
`

const Logo = styled.img`
  width: auto;
  height: 4rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Tool = styled.div`
  text-align: center;
  background-color: #fff;
  flex-basis: content;
  border: 1px solid ${colors.gray20};
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 0.75rem;
  margin-right: 1rem;

  & h5 {
    margin-bottom: 1rem;
  }

  & p {
    font-family: "Helvetica Neue", sans-serif;
    font-size: 0.875rem;
    color: ${colors.gray60};
    width: 12rem;
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    & p {
      width: 15rem;
    }
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    flex-basis: calc(33.3% - 0.5rem);
    margin-right: 0rem;

    & p {
      width: 100%;
    }
  }
`

export default ToolsSection
