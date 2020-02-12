import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectItemLarge = ({ project }) => {
  const { title, description, thumbnail } = project.childMdx.frontmatter
  const { slug } = project.childMdx.fields
  return (
    <Project>
      <ImageLink to={`portfolio${slug}`}>
        <Thumbnail fluid={thumbnail.childImageSharp.fluid} />
      </ImageLink>
      <Link to={`portfolio${slug}`}>
        <Title>{title}</Title>
      </Link>
      <Description>{description}</Description>
    </Project>
  )
}

const Project = styled.div``

const ImageLink = styled(Link)`
  &:hover {
    & * {
      opacity: 0.9;
    }
  }
`

const Thumbnail = styled(Image)`
  transition: opacity 0.125s ease;
`

const Title = styled.h3``

const Description = styled.p``

export default ProjectItemLarge
