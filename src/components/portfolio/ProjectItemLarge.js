import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectItemLarge = ({ project }) => {
  const { title, description, thumbnail } = project.frontmatter
  const { slug } = project.fields
  return (
    <Project>
      <Image fluid={thumbnail.childImageSharp.fluid} />
      <Link to={`portfolio${slug}`}>
        <Title>{title}</Title>
      </Link>
      <Description>{description}</Description>
    </Project>
  )
}

const Project = styled.div``

const Title = styled.h3``

const Description = styled.p``

export default ProjectItemLarge
