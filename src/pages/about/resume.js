import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Experience from "../../components/about/Experience"
import Education from "../../components/about/Education"
import PageTitle from "../../components/about/PageTitle"
import DownloadResume from "../../components/about/DownloadResume"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Resume"
          description="Jack Gannon has experience working on some exciting projects for some amazing companies. This page acts as his digital resume, providing information for all of the design roles that he has had over the years."
        />
        <PageTitle text="CV/Resume" />
        <DownloadResume />
        <Experience />
        <Education />
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
