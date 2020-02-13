import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { colors } from "../../../utils/colors"
import { rhythm } from "../../../utils/typography"
import { breakpoints } from "../../../utils/breakpoints"
import ArrowIcon from "../../vectors/ArrowIcon"

const BlogPostHeader = ({ post, avatar }) => {
  const { title, author, date, description, thumbnail } = post.frontmatter
  return (
    <Container>
      <BackButton onClick={() => window.history.back()}>
        <ArrowIcon lineColor={colors.gray50} lineWidth="4px" />
      </BackButton>
      <Title>{title}</Title>
      <BlogSubheader>
        <Avatar fixed={avatar} />
        <div>
          <Author>
            By:
            <AuthorName>{author}</AuthorName>
          </Author>
          <Published>
            <Date>{date}</Date>
          </Published>
        </div>
      </BlogSubheader>
      <StyledImage fluid={thumbnail.childImageSharp.fluid} />
    </Container>
  )
}

const Container = styled.div``

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
  display: flex;
  align-items: center;
  font-family: "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", sans-serif;
  margin-bottom: ${rhythm(1 / 2)};
`

const Avatar = styled(Image)`
  margin-right: 0.5rem;
  border-radius: 50%;
`

const Author = styled.p`
  margin-bottom: ${rhythm(0)};
  line-height: 1rem;
`

const AuthorName = styled.span`
  font-weight: 800;
  font-size: 1rem;
  color: ${colors.gray80};
  margin-left: 0.25rem;
`

const Published = styled.p`
  color: ${colors.gray60};
  font-size: 0.875rem;
  margin-bottom: ${rhythm(0)};
`

const Date = styled.span``

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

  @media (min-width: ${breakpoints.desktop.small}) {
    margin-left: 0rem;
    width: 100%;
    margin-bottom: ${rhythm(1.5)};
  }
`

export default BlogPostHeader
