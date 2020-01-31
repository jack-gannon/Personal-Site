import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Bio from "../components/blog/bio"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class PortfolioProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <article>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />

          {/* <StyledImage fluid={post.frontmatter.thumbnail.childImageSharp.fluid} /> */}

          <MDXRenderer>{post.body}</MDXRenderer>

          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Bio />
        </Layout>
      </article>
    )
  }
}

export default PortfolioProjectTemplate

export const pageQuery = graphql`
  query PortfolioProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
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
`
