import React from "react"
import styled from "styled-components"
import PostItemLarge from "./PostItemLarge"
import { breakpoints } from "../../utils/breakpoints"

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
  @media (min-width: ${breakpoints.tablet.small}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    justify-content: start;
    margin-top: 1rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-top: 4rem;
  }
`

export default BlogPostCollection
