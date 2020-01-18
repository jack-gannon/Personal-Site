import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { colors } from "../utils/colors"
import { rhythm } from "../utils/typography"
import ArrowIcon from "./ArrowIcon"

const BlogHeader = ({ author, date, title, avatar }) => {
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
    </Container>
  )
}

const Container = styled.div``

const Title = styled.h1`
  margin-top: ${rhythm(0.5)};
  margin-bottom: ${rhythm(1 / 2)};
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
  box-sizing: border-box;
  width: 3rem;
  height: 3rem;
  padding: 0.75rem;
  margin-top: ${rhythm(0.5)};
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

export default BlogHeader
