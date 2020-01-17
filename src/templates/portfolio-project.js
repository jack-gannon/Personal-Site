import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Bio from "../components/bio"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import BlogHeader from "../components/BlogHeader"

class PortfolioProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        {/* <StyledImage fluid={post.frontmatter.thumbnail.childImageSharp.fluid} /> */}
        <BodyContainer>
          <MDXRenderer>{post.body}</MDXRenderer>
        </BodyContainer>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

export default PortfolioProjectTemplate

const StyledImage = styled(Image)`
  height: 16rem;
  width: 100vw;
  margin-left: -1rem;
  margin-bottom: ${rhythm(1.5)};

  @media (min-width: 768px) {
    height: 32rem;
    margin-left: 0rem;
    width: 100%;
  }
`

const BodyContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }
`

export const pageQuery = graphql`
  query PortfolioProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 590) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
