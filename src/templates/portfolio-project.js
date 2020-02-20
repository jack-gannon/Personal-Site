import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Bio from "../components/blog/bio"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import PortfolioProjectDetails from "../components/portfolio/PortfolioProjectDetails"

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
          reverseMain={true}
          asideContents={[
            <PortfolioProjectDetails
              client={project.frontmatter.client}
              tools={project.frontmatter.tools}
              credits={project.frontmatter.credits}
              role={project.frontmatter.role}
            />,
          ]}
        >
          <SEO
            title={project.frontmatter.title}
            description={project.frontmatter.description || project.excerpt}
          />

          {/* <StyledImage fluid={post.frontmatter.thumbnail.childImageSharp.fluid} /> */}
          <h2>Overview</h2>
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
        client {
          client_name
          is_personal
        }
        role
        project_images {
          alt_text
          caption
          project_image {
            childImageSharp {
              mainImage: fluid(maxWidth: 1248, quality: 100) {
                ...GatsbyImageSharpFluid
              }
              thumbImage: fluid(maxWidth: 88, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1248) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tools {
          name
          tool_logo {
            publicURL
          }
        }
        actions {
          action_text
          url
        }
        credits {
          name
          role
        }
      }
    }
  }
`
