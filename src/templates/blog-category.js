import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCollection from "../components/blog/PostCollection"

class BlogCategoryTemplate extends React.Component {
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
    const posts = data.allFile.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <PostCollection posts={posts} />
      </Layout>
    )
  }
}

export default BlogCategoryTemplate

export const blogQuery = graphql`
  query($category: String) {
    allFile(
      sort: { fields: childMdx___frontmatter___date, order: DESC }
      filter: {
        sourceInstanceName: { eq: "blog" }
        internal: { mediaType: { regex: "/text/" } }
        childMdx: { frontmatter: { category: { eq: $category } } }
      }
    ) {
      edges {
        node {
          id
          childMdx {
            frontmatter {
              author
              date(formatString: "MMMM DD, YYYY")
              category
              description
              title
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 1246) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
