import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import GetInTouch from "../components/about/GetInTouch"
import StayConnected from "../components/about/StayConnected"

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact" />
        <ContactContainer>
          <StayConnected />
          <GetInTouch />
        </ContactContainer>
      </Layout>
    )
  }
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  & .contact-container:first-child {
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    flex-direction: row;
    justify-content: space-between;
    & .contact-container:first-child {
      flex-basis: 45%;
      margin-right: 2rem;
      margin-bottom: 0rem;
    }
  }
`

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
