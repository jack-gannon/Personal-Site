import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedPost from "../components/blog/FeaturedPost"
import PostCollection from "../components/blog/PostCollection"

class Blog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const allPosts = data.allPosts.edges
    const featuredPost = data.featuredPost.edges[0].node

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <FeaturedPost featuredPost={featuredPost} />
        <PostCollection posts={allPosts} />
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
    featuredPost: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 1
      filter: { frontmatter: { content_type: { eq: "blog" } } }
    ) {
      edges {
        node {
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
              childImageSharp {
                fluid(maxWidth: 1246) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allPosts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 1
      filter: { frontmatter: { content_type: { eq: "blog" } } }
    ) {
      edges {
        node {
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
              childImageSharp {
                fluid(maxWidth: 1246) {
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
