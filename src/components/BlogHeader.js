import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { colors } from "../utils/colors"
import { rhythm, scale } from "../utils/typography"

const BlogHeader = ({ title, date, author, imageSrc }) => {
  return (
    <StaticQuery
      query={subheaderQuery}
      render={data => {
        return (
          <div>
            <Title>{title}</Title>
            <Divider />
            <BlogSubheader>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 4),
                  marginBottom: 0,
                  minWidth: 48,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <div>
                <FieldLabel>By: </FieldLabel>
                <AuthorName>{author}</AuthorName>
                <Date>{date}</Date>
              </div>
            </BlogSubheader>
            <Divider />
          </div>
        )
      }}
    ></StaticQuery>
  )
}

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  color: ${colors.gray70};
`

const Divider = styled.hr`
  margin-bottom: 0.5rem;
  background: none;
  border-bottom: 3px dotted ${colors.gray20};
`

const BlogSubheader = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: monospace;
`

const AuthorName = styled.span`
  font-weight: 800;
  font-size: 1rem;
  color: ${colors.gray70};
`

const FieldLabel = styled.span`
  font-size: 0.875rem;
  color: ${colors.gray70};
`

const Date = styled.p`
  font-family: monospace;
  font-size: 0.875rem;
  line-height: 0.5rem;
  color: ${colors.gray60};
`

const MainImg = styled(Image)`
  width: 100%;
`
const subheaderQuery = graphql`
  query subheaderQuery {
    avatar: file(absolutePath: { regex: "/avatar-pic.jpg/" }) {
      childImageSharp {
        fixed(height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default BlogHeader
