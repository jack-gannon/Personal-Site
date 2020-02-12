import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"
import ContactImageSrc from "../../../content/assets/contact_image.jpg"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <PageTitle>Contact</PageTitle>
        <ContactContainer>
          <ContactImage>
            <img
              src={ContactImageSrc}
              alt="Stylized phone with assorted vector graphics and icons"
            />
          </ContactImage>
          <ContactInfo>
            <Blurb>
              Want to get in touch, or stay connected? Feel free to reach out to
              me on any of the following platforms:
            </Blurb>
            <List>
              <Item>
                <a href="https://twitter.com/jackgannon_">
                  <Label>Email:</Label>
                  <Value>jackgannondesign@gmail.com</Value>
                </a>
              </Item>
              <Item>
                <a href="https://twitter.com/jackgannon_">
                  <Label>Twitter:</Label>
                  <Value>jackgannon_</Value>
                </a>
              </Item>
              <Item>
                <a href="https://linkedin.com/in/jack-gannon">
                  <Label>LinkedIn:</Label>
                  <Value>jack-gannon</Value>
                </a>
              </Item>
              <Item>
                <a href="https://twitter.com/jackgannon_">
                  <Label>GitHub:</Label>
                  <Value>jack-gannon</Value>
                </a>
              </Item>
              <Item>
                <a href="https://dribbble.com/jackgannon">
                  <Label>Dribbble:</Label>
                  <Value>jackgannon</Value>
                </a>
              </Item>
            </List>
          </ContactInfo>
        </ContactContainer>
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

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.desktop.small}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`

const ContactImage = styled.div`
  @media (min-width: ${breakpoints.desktop.small}) {
    flex-basis: 60%;
  }
`

const ContactInfo = styled.div`
  @media (min-width: ${breakpoints.desktop.small}) {
    flex-basis: 40%;
    margin-right: 3rem;
  }
`

const Blurb = styled.p`
  color: ${colors.gray60};

  @media (min-width: ${breakpoints.desktop.small}) {
    font-size: 1.25rem;
  }
`

const List = styled.ul`
  font-family: "Helvetica Neue", sans-serif;
  list-style: none;
  margin-left: 0rem;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
  }
`

const Item = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    color: ${colors.gray70};
    text-decoration: none;
  }

  border-bottom: 1px solid ${colors.gray20};
  margin-bottom: 0rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:hover {
    background-color: ${colors.gray20};

    & span:first-child {
      transform: translateX(0.5rem);
    }

    & span:last-child {
      color: ${colors.gray80};
    }
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1.25rem;
  }
`

const Label = styled.span`
  font-weight: 600;
  display: flex;
  transition: transform 0.25s ease;
`

const Value = styled.span`
  color: ${colors.gray60};
`

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
