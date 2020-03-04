import React from "react"
import styled from "styled-components"
import ProjectItemLarge from "./ProjectItemLarge"
import PageTitle from "../about/PageTitle"
import { breakpoints } from "../../utils/breakpoints"
import { hardcodeSort } from "../../utils/hardcodeSort"

const ProjectCollection = ({ projects }) => {
  const newProjects = hardcodeSort(projects)
  return (
    <Section>
      <PageTitle text="Projects" />
      <Grid>
        {newProjects.map((project, index) => (
          <ProjectItemLarge key={index} project={project.node} />
        ))}
      </Grid>
    </Section>
  )
}

const Section = styled.section``
const Grid = styled.div`
  margin-top: 1rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    justify-content: start;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    grid-gap: 2rem;
  }
`

export default ProjectCollection
