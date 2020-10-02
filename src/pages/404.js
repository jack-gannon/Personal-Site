import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { breakpoints } from "../utils/breakpoints"
import { colors } from "../utils/colors"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="404: Not Found"
          description="Unfortunately, we couldn't find what you were looking for. Luckily for you, there is more amazing design and web dev content elsewhere on the site. Check it out!"
        />
        <FourOhFour>404</FourOhFour>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <Blurb>
          Sorry, we could not find what you were looking for. Maybe try these
          helpful links below:
        </Blurb>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/portfolio">About</Link>
          </li>
        </ul>
        <h3>Blog Categories:</h3>
        <ul>
          <li>
            <Link to="/blog">All</Link>
          </li>
          <li>
            <Link to="/blog/category/design-posts">Design</Link>
          </li>
          <li>
            <Link to="/blog/category/development-posts">Development</Link>
          </li>
          <li>
            <Link to="/blog/category/personal-posts">Personal</Link>
          </li>
        </ul>
        <h3>About Links:</h3>
        <ul>
          <li>
            <Link to="/about">Personal</Link>
          </li>
          <li>
            <Link to="/about/skills-services">Skills and Services</Link>
          </li>
          <li>
            <Link to="/about/contact">Contact</Link>
          </li>
        </ul>
      </Layout>
    )
  }
}

const FourOhFour = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.desktop.small}) {
    font-size: 14rem;
  }
`

const ErrorTitle = styled.h2`
  margin-bottom: 1rem;
`

const Blurb = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray70};
`

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
