import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import styled from "styled-components"
import SEO from "../../components/seo"
import WebSkills from "../../components/about/WebSkills"
import WebTools from "../../components/about/WebTools"
import UXSkills from "../../components/about/UXSkills"
import UISkills from "../../components/about/UISkills"
import DesignTools from "../../components/about/DesignTools"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <PageTitle>Skills & Services</PageTitle>
        <WebSkills />
        <WebTools />
        <UXSkills />
        <UISkills />
        <DesignTools />
      </Layout>
    )
  }
}

const PageTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 0.175em;
  font-weight: 600;
`

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
