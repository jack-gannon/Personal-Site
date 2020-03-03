import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/alt/Hero"
import WhatIDo from "../components/home/alt/WhatIDo"
import FeaturedProjects from "../components/home/alt/FeaturedProjects"
import FeaturedPost from "../components/home/alt/FeaturedPost"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <>
        <Layout
          location={this.props.location}
          title={siteTitle}
          fullWidth={true}
          fullHeight={true}
        >
          <SEO
            title="Home"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <Hero />
          <WhatIDo />
          <FeaturedProjects />
          <FeaturedPost />
        </Layout>
      </>
    )
  }
}

export default IndexPage
