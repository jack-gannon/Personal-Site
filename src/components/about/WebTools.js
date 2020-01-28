import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"

const WebTools = () => {
  return (
    <Tools>
      <ToolHeader>Development Tools</ToolHeader>
      <Grid>
        <Tool>
          <h5>React</h5>
          <p>
            JavaScript library for building interfaces and single-page
            applications
          </p>
        </Tool>
        <Tool>
          <h5>Node.js</h5>
          <p>JavaScript runtime environment outside of the browser</p>
        </Tool>
        <Tool>
          <h5>Express.js</h5>
          <p>Node.js framework for building APIs and template engines</p>
        </Tool>
        <Tool>
          <h5>webpack</h5>
          <p>Module bundler for ES6 modules</p>
        </Tool>
        <Tool>
          <h5>Git/GitHub</h5>
          <p>Version management tool and code repository</p>
        </Tool>
        <Tool>
          <h5>Gatsby.js</h5>
          <p>Static-Site Generator for programmatically creating websites</p>
        </Tool>
        <Tool>
          <h5>GraphQL</h5>
          <p>Language for querying and manipulating data from APIs</p>
        </Tool>
        <Tool>
          <h5>Redux</h5>
          <p>JavaScript library for managing application-level state</p>
        </Tool>
        <Tool>
          <h5>MongoDB</h5>
          <p>NoSQL document-oriented database solution</p>
        </Tool>
      </Grid>
    </Tools>
  )
}

const Tools = styled.section`
  display: grid;
  grid-template-columns: calc(25% - 0.5rem) calc(75% - 0.5rem);
  grid-gap: 1rem;
  width: 100%;
  margin-bottom: 4rem;
`

const ToolHeader = styled.h3`
  border-right: 1px solid ${colors.gray30};
`

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  grid-gap: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid pink;
`

const Tool = styled.div`
  flex-basis: calc(33.3% - 0.5rem);
  text-align: center;
  background-color: #fff;
  border: 1px solid ${colors.gray20};
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 0.75rem;

  & h5 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  & p {
    font-family: "Helvetica Neue", sans-serif;
    font-size: 0.875rem;
    color: ${colors.gray60};
  }
`

export default WebTools
