import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"

const DesignTools = () => {
  return (
    <Tools>
      <ToolHeader>Design Tools</ToolHeader>
      <Grid>
        <Tool>
          <h5>Sketch</h5>
          <p>
            Design tool for creating wireframes, mockups, and other design
            assets
          </p>
        </Tool>
        <Tool>
          <h5>Figma</h5>
          <p>
            Design tool for creating assets, interactive prototypes, and
            collaboration
          </p>
        </Tool>
        <Tool>
          <h5>Zeplin</h5>
          <p>
            Sketch plugin that helps provide a smooth transition from design to
            development
          </p>
        </Tool>
        <Tool>
          <h5>Principle</h5>
          <p>
            Animation and interaction design software for prototyping designs
          </p>
        </Tool>
        <Tool>
          <h5>Adobe Creative Cloud</h5>
          <p>
            The famous line of Adobe products that features Illustrator,
            Photoshop, and more
          </p>
        </Tool>
        <Tool>
          <h5>Hotjar</h5>
          <p>
            Behavior tracking software used for heatmaps, session recordings,
            and more
          </p>
        </Tool>
        <Tool>
          <h5>Google Analytics</h5>
          <p>
            Web analytics service by Google that tracks and reports web traffic
          </p>
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

  & p {
    font-family: "Helvetica Neue", sans-serif;
    font-size: 0.875rem;
    color: ${colors.gray60};
  }
`

export default DesignTools
