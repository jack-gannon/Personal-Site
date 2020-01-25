import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedPost from "../components/blog/FeaturedPost"
import PostCollection from "../components/blog/PostCollection"

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeCategory: "all",
    }
    this.handleSelectCategory = this.handleSelectCategory.bind(this)
  }

  handleSelectCategory(category) {
    this.setState(state => ({
      activeCategory: category,
    }))
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const featuredPost = data.allMdx.edges[0].node

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <FeaturedPost featuredPost={featuredPost} />
        <PostCollection
          posts={posts.filter((post, index) => {
            return index !== 0
          })}
        />
      </Layout>
    )
  }
}

export default Blog

export const blogQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { content_type: { eq: "blog" } } }
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
