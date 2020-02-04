import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { colors } from "../../../utils/colors"
import { rhythm } from "../../../utils/typography"
import { breakpoints } from "../../../utils/breakpoints"
import ArrowIcon from "../../vectors/ArrowIcon"

const PortfolioProjectHeader = ({ project }) => {
  const {
    title,
    author,
    description,
    thumbnail,
    liveSiteLink = "http://jackgannon.io",
    githubLink = "http://github.com/jack-gannon",
  } = project.frontmatter
  return (
    <Container>
      <BackButton onClick={() => window.history.back()}>
        <ArrowIcon lineColor={colors.gray50} lineWidth="4px" />
      </BackButton>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ActionPanel>
        {liveSiteLink ? (
          <LiveSiteLink href={liveSiteLink}>View Live Site</LiveSiteLink>
        ) : null}
        {githubLink ? (
          <GitHubLink href={githubLink}>GitHub Repo</GitHubLink>
        ) : null}
      </ActionPanel>
      <Image fluid={thumbnail.childImageSharp.fluid} />
    </Container>
  )
}

const Container = styled.div``

const Title = styled.h1`
  margin-top: ${rhythm(0.5)};
  margin-bottom: ${rhythm(0.125)};

  @media (min-width: ${breakpoints.tablet.medium}) {
    font-size: 3rem;
    width: 70%;
    margin-top: ${rhythm(1)};
    margin-bottom: ${rhythm(0.25)};
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 50%;
  }
`

const Description = styled.p`
  color: ${colors.gray60};
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
    width: 40%;

    & a {
      flex-basis: calc(50% - 0.5rem);

      &:first-child {
        margin-right: 1rem;
      }
    }
  }
`

const BackButton = styled.button`
  width: 3rem;
  height: 3rem;
  padding: 0.75rem;
  background-color: ${colors.gray20};
  border: none;
  border-radius: 50%;

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

const GitHubLink = styled.a``

const LiveSiteLink = styled.a``

export default PortfolioProjectHeader
