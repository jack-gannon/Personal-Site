import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Portfolio extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio" />
        <div style={{ margin: "20px 0 40px" }}></div>
        <ul>
          {projects.map(project => {
            const { title, description } = project.node.frontmatter
            return (
              <li key={title}>
                <p>{title}</p>
                <p>{description}</p>
              </li>
            )
          })}
        </ul>
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { content_type: { eq: "portfolio" } } }
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
          }
        }
      }
    }
  }
`
