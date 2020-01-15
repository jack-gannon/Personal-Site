import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function FeaturedPost() {
  return (
    <StaticQuery
      query={featuredPostQuery}
      render={data => {
        const post = data.allMdx.edges[0].node
        const { title, date, description } = post.frontmatter
        const { id, fields } = post
        return (
          <Container>
            <h3>{post.frontmatter.title}</h3>
            <p>{date}</p>
            <p>{description}</p>

            {/* <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            /> */}
            {/* <h3>{title}</h3>
            <p>{date}</p>
            <p>{description}</p> */}
          </Container>
        )
      }}
    />
  )
}

const featuredPostQuery = graphql`
  query FeaturedPostQuery {
    allMdx(limit: 1, sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
          }
          excerpt(pruneLength: 30)
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default FeaturedPost
