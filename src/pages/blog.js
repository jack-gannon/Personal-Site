import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedPost from "../components/blog/FeaturedPost"
import PostCollection from "../components/blog/PostCollection"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const allPosts = data.allPosts.edges
    const featuredPost = data.featuredPost.edges[0].node

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <FeaturedPost featuredPost={featuredPost} />
        <PostCollection posts={allPosts} showEmptyState={false} />
      </Layout>
    )
  }
}

export default Blog

export const blogQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    featuredPost: allFile(
      sort: { fields: childMdx___frontmatter___date, order: DESC }
      limit: 1
      filter: {
        sourceInstanceName: { eq: "blog" }
        internal: { mediaType: { regex: "/text/" } }
      }
    ) {
      edges {
        node {
          childMdx {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              category
              author
              description
              thumbnail {
                src {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
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
    allPosts: allFile(
      sort: { fields: childMdx___frontmatter___date, order: DESC }
      skip: 1
      filter: {
        sourceInstanceName: { eq: "blog" }
        internal: { mediaType: { regex: "/text/" } }
      }
    ) {
      edges {
        node {
          childMdx {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              category
              author
              description
              thumbnail {
                src {
                  childImageSharp {
                    fluid(maxWidth: 403, quality: 90) {
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
  }
`
