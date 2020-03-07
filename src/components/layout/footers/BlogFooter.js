import React from "react"
import Footer from "./Footer"
import styled from "styled-components"
import { rhythm } from "../../../utils/typography"
import { breakpoints } from "../../../utils/breakpoints"
import Tags from "../../blog/Tags"

const BlogFooter = ({ post }) => {
  return (
    <>
      <ContentBottom>
        <Tags tags={post.frontmatter.tags} />
      </ContentBottom>
      <Footer />
    </>
  )
}

const ContentBottom = styled.div`
  width: 100%;
  max-width: ${rhythm(40)};
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet.medium}) {
    & div:first-child {
      width: 67%;
    }
  }
`

export default BlogFooter
