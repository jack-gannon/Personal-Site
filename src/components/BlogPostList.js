import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import BlogPostListItem from "./BlogPostListItem"
import { rhythm } from "../utils/typography"

function BlogPostList({ posts }) {
  return (
    <Container>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <BlogPostListItem
            title={title}
            slug={node.fields.slug}
            category={node.frontmatter.category}
            imgFluid={node.frontmatter.thumbnail.childImageSharp.fluid}
            date={node.frontmatter.date}
            description={node.frontmatter.description || node.excerpt}
          />
        )
      })}

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
}

const Container = styled.div`
  margin: 20px 0 40px;

  @media (min-width: 760px) {
    display: grid;
    grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
    grid-gap: 1rem;
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 1rem;
  }
`

export default BlogPostList
