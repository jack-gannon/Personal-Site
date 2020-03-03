import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SlideDeck from "../components/home/SlideDeck"
import { NavProvider, NavConsumer } from "../components/nav/nav-context"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <>
        <NavProvider>
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

            <NavConsumer>
              {({ isDark, handleDark, handleLight }) => (
                <SlideDeck
                  isDark={isDark}
                  handleDark={() => handleDark()}
                  handleLight={() => handleLight()}
                  orientation="vertical"
                />
              )}
            </NavConsumer>
          </Layout>
        </NavProvider>
      </>
    )
  }
}

export default IndexPage
