import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Services from "../components/Services"
import FeaturedProjects from "../components/FeaturedProjects"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <>
        <Hero />
        <Layout
          location={this.props.location}
          title={siteTitle}
          fullWidth={true}
        >
          <SEO
            title="Home"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <Services />
          <FeaturedProjects />
          <p>Welcome to your new Gatsby website. You are on your home page.</p>
          <p>
            This starter comes out of the box with styled components and
            Gatsby's default starter blog running on Netlify CMS.This starter
            comes out of the box with styled components and Gatsby's default
            starter blog running on Netlify CMS.This starter comes out of the
            box with styled components and Gatsby's default starter blog running
            on Netlify CMS.
          </p>
          <p data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            This starter comes out of the box with styled components and
            Gatsby's default starter blog running on Netlify CMS.This starter
            comes out of the box with styled components and Gatsby's default
            starter blog running on Netlify CMS.This starter comes out of the
            box with styled components and Gatsby's default starter blog running
            on Netlify CMS.
          </p>
          <p>Now go build something great!</p>
        </Layout>
      </>
    )
  }
}

export default IndexPage
