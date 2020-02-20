import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Bio from "../components/blog/bio"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { breakpoints } from "../utils/breakpoints"
import RelatedPosts from "../components/blog/RelatedPosts"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post
    const relatedPosts = this.props.data.relatedPosts.edges
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <article>
        <Layout
          location={this.props.location}
          title={siteTitle}
          post={post}
          avatar={this.props.data.avatar.childImageSharp.fixed}
          articleLayout={true}
          reverseMain={false}
        >
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
            ogImage={post.frontmatter.thumbnail.publicURL}
          />
          {/* <BlogHeader
          title={post.frontmatter.title}
          author={post.frontmatter.author}
          date={post.frontmatter.date}
          avatar={this.props.data.avatar.childImageSharp.fixed}
        /> */}
          <MDXRenderer>{post.body}</MDXRenderer>

          {/* <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul> */}
        </Layout>
      </article>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $category: String) {
    avatar: file(absolutePath: { regex: "/avatar-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
    post: mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        author
        category
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1246) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    relatedPosts: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 80)
          fields {
            slug
          }
          frontmatter {
            title
            author
            category
            date(formatString: "MMMM DD, YYYY")
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 120) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
