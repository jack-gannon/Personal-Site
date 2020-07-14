import React from "react"
import { graphql } from "gatsby"
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
        <SEO
          title="Portfolio"
          description="Jack Gannon's portfolio is a showcase of previous design and development work that he has completed for both clients as well as on a personal basis. From developing simple websites to designing large, complex software solutions, Jack Gannon has completed a variety of projects."
        />
        <ProjectCollection projects={projects} />
      </Layout>
    )
  }
}

export default Portfolio

export const pageQuery = graphql`
  query PortfolioQuery {
    site {
      siteMetadata {
        title
      }
    }
    allFile(
      filter: { sourceInstanceName: { eq: "portfolio" } }
      sort: { fields: childMdx___frontmatter___title, order: ASC }
    ) {
      edges {
        node {
          childMdx {
            fields {
              slug
            }
            frontmatter {
              index
              title
              description
              thumbnail {
                src {
                  childImageSharp {
                    fluid(maxWidth: 608, quality: 90) {
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
