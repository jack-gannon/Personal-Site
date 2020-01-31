import React from "react"
import styled, { keyframes } from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import { rhythm } from "../../../utils/typography"
import { colors } from "../../../utils/colors"
import { breakpoints } from "../../../utils/breakpoints"

const BlogSlide = () => {
  return (
    <StaticQuery
      query={blogSlideQuery}
      render={data => {
        const post = data.allMdx.edges[0]
        const { date, title, description, thumbnail } = post.node.frontmatter

        return (
          <Slide>
            <Contents>
              <SectionHeader>Featured Blog Post</SectionHeader>
              <Details>
                <BlogTitle>{title}</BlogTitle>
                <Description>{description}</Description>
                <Link to={`blog/${post.node.fields.slug}`}>Read More</Link>
              </Details>
            </Contents>
          </Slide>
        )
      }}
    />
  )
}

const blogSlideQuery = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { content_type: { eq: "blog" } } }
      limit: 1
    ) {
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
            category
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 590) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const slideIn = keyframes`
0% {
  opacity: 0;
  transform: translateX(2rem);

}
100% {
  opacity: 1;
  transform: translateX(0rem);
}
`

const Slide = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.primaryLight};
`

const Contents = styled.div`
  width: 80%;
  margin-left: 1rem;
  @media (min-width: ${breakpoints.tablet.small}) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(40)};
  }
`

const Description = styled.p`
  width: 100%;
  font-size: 0.875rem;
  margin-bottom: 0rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1.2rem;
    width: 50%;
  }
`

const Details = styled.div`
  width: 80%;
  animation: ${slideIn} 0.5s ease;
  animation-delay: 1s;
  animation-fill-mode: both;

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 60%;
  }
`

const SectionHeader = styled.h2`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`

const BlogTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 4rem;
  }
`

export default BlogSlide
