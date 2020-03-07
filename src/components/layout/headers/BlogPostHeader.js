import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { colors } from "../../../utils/colors"
import { rhythm } from "../../../utils/typography"
import { breakpoints } from "../../../utils/breakpoints"
import ArrowIcon from "../../vectors/ArrowIcon"
import SharePanel from "../../blog/SharePanel"
import AuthorDetails from "../../blog/AuthorDetails"

const BlogPostHeader = ({ post, avatar, location }) => {
  const { title, author, date, thumbnail, description } = post.frontmatter
  return (
    <Container>
      <BackButton aria-label="Back" onClick={() => window.history.back()}>
        <ArrowIcon lineColor={colors.gray50} lineWidth="4px" />
      </BackButton>
      <Title>{title}</Title>
      <BlogSubheader>
        <AuthorDetails author={author} date={date} avatar={avatar} />
        <SharePanel
          url={location.href}
          title={title}
          description={description}
        />
      </BlogSubheader>
      <StyledImage fluid={thumbnail.src.childImageSharp.fluid} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Title = styled.h1`
  margin-top: ${rhythm(0.5)};
  margin-bottom: ${rhythm(0.5)};

  @media (min-width: ${breakpoints.tablet.medium}) {
    font-size: 3rem;
    width: 70%;
    margin-top: ${rhythm(1)};
    margin-bottom: ${rhythm(1)};
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 50%;
  }
`

const BlogSubheader = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-family: "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", sans-serif;
  margin-top: 1.5rem;
  margin-bottom: ${rhythm(1 / 2)};
  z-index: 2;

  &:before {
    content: " ";
    position: absolute;
    top: -1rem;
    left: -1rem;
    right: -1rem;
    height: 1px;
    width: calc(100% + 2rem);
    background-color: ${colors.gray30};
    opacity: 0.8;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    &:before {
      left: 0rem;
      right: 0rem;
      width: 100%;
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

const StyledImage = styled(Image)`
  height: auto;
  width: 100vw;
  margin-left: -1rem;
  z-index: 1;

  @media (min-width: ${breakpoints.desktop.small}) {
    margin-left: 0rem;
    width: 100%;
    margin-bottom: ${rhythm(1.5)};
  }
`

export default BlogPostHeader
