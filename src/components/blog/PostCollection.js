import React from "react"
import styled from "styled-components"
import PostItemLarge from "./PostItemLarge"
import { breakpoints } from "../../utils/breakpoints"
import EmptyState from "../layout/main/EmptyState"

function BlogPostCollection({ posts = [], showEmptyState = true }) {
  return posts.length > 0 ? (
    <Container>
      {posts.map(({ node }, index) => {
        return <PostItemLarge post={node} key={node.childMdx.fields.slug} />
      })}
    </Container>
  ) : showEmptyState ? (
    <EmptyState
      type="blog"
      mainText="No Posts Here...Yet!"
      bodyText="I am busy writing some more content. Check back again soon!"
    />
  ) : null
}

const Container = styled.div`
  margin-top: 1rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    justify-content: start;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-top: 2rem;
  }
`

export default BlogPostCollection
