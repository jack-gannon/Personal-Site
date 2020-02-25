import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import WebSkills from "../../components/about/WebSkills"
import WebTools from "../../components/about/WebTools"
import UXSkills from "../../components/about/UXSkills"
import UISkills from "../../components/about/UISkills"
import DesignTools from "../../components/about/DesignTools"
import PageTitle from "../../components/about/PageTitle"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <PageTitle text="Skills & Services" />
        <WebSkills />
        <WebTools />
        <UXSkills />
        <UISkills />
        <DesignTools />
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
