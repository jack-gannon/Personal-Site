import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Hero from "../components/Hero"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <>
        <Hero />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Home"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <img
            style={{ margin: 0 }}
            src="./GatsbyScene.svg"
            alt="Gatsby Scene"
          />
          <hr />
          <h1>Hey people </h1>
          <p>Welcome to your new Gatsby website. You are on your home page.</p>
          <p>
            This starter comes out of the box with styled components and
            Gatsby's default starter blog running on Netlify CMS.This starter
            comes out of the box with styled components and Gatsby's default
            starter blog running on Netlify CMS.This starter comes out of the
            box with styled components and Gatsby's default starter blog running
            on Netlify CMS.
          </p>
          <p>
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
