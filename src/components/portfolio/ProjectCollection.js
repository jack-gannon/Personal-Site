import React from "react"
import styled from "styled-components"
import ProjectItemLarge from "./ProjectItemLarge"
import { breakpoints } from "../../utils/breakpoints"
import { colors } from "../../utils/colors"

const ProjectCollection = ({ projects }) => {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <Grid>
        {projects.map(project => (
          <ProjectItemLarge project={project.node} />
        ))}
      </Grid>
    </Section>
  )
}

const Section = styled.section``

const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.25rem;
  letter-spacing: 0.25rem;
  font-weight: 500;
`

const Grid = styled.div`
  margin-top: 1rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    justify-content: start;
  }
`

export default ProjectCollection
