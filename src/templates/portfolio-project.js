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
    const project = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <article>
        <Layout
          location={this.props.location}
          title={siteTitle}
          project={project}
          articleLayout={true}
        >
          <SEO
            title={project.frontmatter.title}
            description={project.frontmatter.description || project.excerpt}
          />

          {/* <StyledImage fluid={post.frontmatter.thumbnail.childImageSharp.fluid} /> */}

          <MDXRenderer>{project.body}</MDXRenderer>

          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
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
