import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import styled from "styled-components"
import FeaturedPost from "../components/FeaturedPost"
import BlogPostList from "../components/BlogPostList"

class PortfolioCategoryTemplate extends React.Component {
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

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio" />
      </Layout>
    )
  }
}

export default PortfolioCategoryTemplate

export const blogQuery = graphql`
  query($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
            category
            author
            description
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
