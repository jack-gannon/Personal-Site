import React from "react"
import Image from "gatsby-image"
import GatsbyImageGallery from "../../portfolio/GatsbyImageGallery"
import styled from "styled-components"
import { colors } from "../../../utils/colors"
import { rhythm } from "../../../utils/typography"
import { breakpoints } from "../../../utils/breakpoints"
import ArrowIcon from "../../vectors/ArrowIcon"

const PortfolioProjectHeader = ({ project }) => {
  const {
    title,
    description,
    thumbnail,
    actions,
    project_images,
  } = project.frontmatter

  let projectImages

  if (project_images) {
    projectImages = project_images.map(image => ({
      alt: image.alt_text,
      mainImage: image.project_image.childImageSharp.mainImage,
      caption: image.caption,
      thumbImage: image.project_image.childImageSharp.thumbImage,
    }))
  } else {
    projectImages = null
  }

  return (
    <>
      <BackButton onClick={() => window.history.back()}>
        <ArrowIcon lineColor={colors.gray50} lineWidth="4px" />
      </BackButton>
      <Container>
        <MainInfo>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {actions && (
            <ActionPanel>
              {actions.map(action => (
                <a href={action.url} target="_blank" rel="noopener noreferrer">
                  {action.action_text}
                </a>
              ))}
            </ActionPanel>
          )}
        </MainInfo>
        <ImageSlot>
          {project_images ? (
            <GatsbyImageGallery images={projectImages} />
          ) : (
            <Image fluid={thumbnail.childImageSharp.fluid} />
          )}
        </ImageSlot>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    "main"
    "gallery"
    "details";

  @media (min-width: ${breakpoints.tablet.medium}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "main main main"
      "gallery gallery gallery";
  }
`

const MainInfo = styled.div`
  grid-area: main;
`

const ImageSlot = styled.div`
  grid-area: gallery;
`

const Title = styled.h1`
  margin-top: ${rhythm(0.5)};
  margin-bottom: ${rhythm(0.125)};

  @media (min-width: ${breakpoints.tablet.medium}) {
    font-size: 3rem;
    margin-top: ${rhythm(1)};
    margin-bottom: ${rhythm(0.25)};
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 70%;
  }
`

const Description = styled.p`
  color: ${colors.gray60};
  font-family: "Helvetica Neue", sans-serif;
  margin-bottom: 1rem;
  width: 80%;
  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1.25rem;
  }
`

const ActionPanel = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;

  & a {
    flex-basis: calc(50% - 0.25rem);
    display: block;
    padding: 0.25rem 0.5rem;
    border: 1px solid ${colors.gray70};
    border-radius: 2px;
    color: ${colors.gray70};
    text-align: center;
    font-family: "Helvetica Neue", sans-serif;
    text-decoration: none;

    &:first-child {
      margin-right: 0.5rem;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 50%;
    & a {
      flex-basis: calc(50% - 0.5rem);

      &:first-child {
        margin-right: 1rem;
      }
    }
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 40%;
  }
`

const BackButton = styled.button`
  width: 3rem;
  height: 3rem;
  padding: 0.75rem;
  background-color: ${colors.gray20};
  border: none;
  border-radius: 50%;

  &:hover {
    cursor: pointer;

    svg line,
    svg polyline {
      stroke: ${colors.gray70};
    }
  }

  & svg {
    width: 1.5rem;
  }

  :focus {
    outline: none;
    background-color: ${colors.primary};
  }

  :focus svg polyline,
  :focus svg line {
    stroke: #fff;
    stroke-width: 6px;
  }
`

export default PortfolioProjectHeader
