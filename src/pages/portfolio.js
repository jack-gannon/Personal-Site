import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCollection from "../components/portfolio/ProjectCollection"

class Portfolio extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allFile.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio" />
        <ProjectCollection projects={projects} />
      </Layout>
    )
  }
}

export default Portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(
      filter: { sourceInstanceName: { eq: "portfolio" } }
      sort: { fields: childMdx___frontmatter___order, order: DESC }
    ) {
      edges {
        node {
          childMdx {
            fields {
              slug
            }
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
      }
    }
  }
`
