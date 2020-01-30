import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Services from "../components/home/Services"
import FeaturedProjects from "../components/home/FeaturedProjects"
import FromTheBlog from "../components/home/FromTheBlog"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <>
        <Layout
          location={this.props.location}
          title={siteTitle}
          fullWidth={true}
        >
          <SEO
            title="Home"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <FeaturedProjects />
          <Services />
          <FromTheBlog />
        </Layout>
      </>
    )
  }
}

export default IndexPage
