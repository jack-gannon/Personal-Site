import React from "react"
import styled from "styled-components"
import PostItemLarge from "./PostItemLarge"

function BlogPostCollection({ posts }) {
  return (
    <Container>
      {posts.map(({ node }, index) => {
        return <PostItemLarge post={node} key={node.fields.slug} />
      })}
    </Container>
  )
}

const Container = styled.div`
  margin: 20px 0 40px;

  @media (min-width: 760px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    justify-content: start;
    margin-top: 1rem;
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-top: 4rem;
  }
`

export default BlogPostCollection
