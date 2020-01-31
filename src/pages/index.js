import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SlideDeck from "../components/home/SlideDeck"

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
          <SlideDeck />
        </Layout>
      </>
    )
  }
}

export default IndexPage
