import React from "react"
import SectionHeader from "./SectionHeader"
import FeaturedPost from "../blog/FeaturedPost"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"
import { rhythm } from "../../utils/typography"
import { Link, StaticQuery, graphql } from "gatsby"
import BlogPostListItem from "../blog/PostItemLarge"

export default () => (
  <StaticQuery
    query={fromTheBlogQuery}
    render={data => {
      const posts = data.allMdx.edges
      return (
        <Wrapper>
          <SectionHeader title="From The Blog" />
          <Contents>
            <FeaturedPost featuredPost={posts[0].node} />
            {data.allMdx.edges.length > 1 ? (
              <MorePosts>
                {posts
                  .filter((post, index) => index !== 0)
                  .map(post => {
                    return <BlogPostListItem post={post.node} />
                  })}
              </MorePosts>
            ) : null}
            <BlogPrompt>
              <BlogLink>Go to Blog</BlogLink>
            </BlogPrompt>
          </Contents>
          <div style={{ height: "40vh" }} />
        </Wrapper>
      )
    }}
  />
)

const fromTheBlogQuery = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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
              src {
                childImageSharp {
                  fluid(maxWidth: 590, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.section``

const Contents = styled.div`
  margin-top: 8rem;
  max-width: ${rhythm(40)};
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`

const BlogPrompt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Helvetica Neue", sans-serif;
  width: 100%;
  max-width: ${rhythm(40)};
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 1rem 2rem 1rem;
  background-color: ${colors.gray20};

  @media (min-width: ${breakpoints.tablet.medium}) {
    margin-left: 1rem;
    margin-right: 1rem;
    width: calc(100vw - 2rem);
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    margin-left: auto;
    margin-right: auto;
  }
`

const BlogLink = styled(Link)`
  text-transform: uppercase;
  border: 2px solid ${colors.gray60};
  color: ${colors.gray60};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  padding: 0.5rem 1rem;

  &:hover {
    border-color: ${colors.primary};
    background-color: ${colors.primary};
    color: #fff;
  }
`

const MorePosts = styled.div`
  @media (min-width: ${breakpoints.tablet.medium}) {
    display: grid;
    grid-template-columns: 50% auto;
    grid-gap: 1rem;
    width: 100%;
  }
`
