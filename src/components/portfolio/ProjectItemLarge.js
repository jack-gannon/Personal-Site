import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { colors } from "../../utils/colors"

const ProjectItemLarge = ({ project }) => {
  const { title, description, thumbnail } = project.childMdx.frontmatter
  const { slug } = project.childMdx.fields
  return (
    <Project>
      <ImageLink to={`/portfolio${slug}`}>
        <Thumbnail fluid={thumbnail.src.childImageSharp.fluid} />
      </ImageLink>
      <Title>
        <TitleLink to={`/portfolio${slug}`}>{title}</TitleLink>
      </Title>
      <Description>{description}</Description>
    </Project>
  )
}

const Project = styled.div``

const ImageLink = styled(Link)``

const Thumbnail = styled(Image)`
  transition: opacity 0.125s ease;

  &:hover {
    opacity: 0.9;
  }
`
const TitleLink = styled(Link)`
  color: ${colors.gray80};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Title = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  color: ${colors.gray60};
  line-height: 1.5rem;
  font-family: "Helvetica Neue", sans-serif;
`

export default ProjectItemLarge
