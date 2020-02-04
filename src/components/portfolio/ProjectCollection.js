import React from "react"
import styled from "styled-components"
import ProjectItemLarge from "./ProjectItemLarge"
import { breakpoints } from "../../utils/breakpoints"

const ProjectCollection = ({ projects }) => {
  return (
    <Container>
      {projects.map(project => (
        <ProjectItemLarge project={project.node} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 1rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    justify-content: start;
  }
`

export default ProjectCollection
