import React from "react"
import styled from "styled-components"
import BlogPostListItem from "./BlogPostListItem"

function BlogPostList({ posts }) {
  return (
    <Container>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <BlogPostListItem
            key={title}
            title={title}
            slug={node.fields.slug}
            category={node.frontmatter.category}
            imgFluid={node.frontmatter.thumbnail.childImageSharp.fluid}
            date={node.frontmatter.date}
            description={node.frontmatter.description || node.excerpt}
          />
        )
      })}
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
