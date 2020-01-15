import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function FeaturedPost({ sortDesc }) {
  return (
    <StaticQuery
      query={sortDesc ? blogQueryDescending : blogQueryAsending}
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

const blogQueryDescending = graphql`
  query BlogAsc {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
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
