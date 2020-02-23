import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post
    const siteTitle = this.props.data.site.siteMetadata.title

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
            ogImage={post.frontmatter.ogImage.src.absolutePath}
            imageAlt={post.frontmatter.thumbnail.alt}
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
        fixed(width: 50, height: 50, quality: 100) {
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
          src {
            childImageSharp {
              fluid(maxWidth: 1248, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        ogImage: thumbnail {
          src {
            absolutePath
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
              src {
                childImageSharp {
                  fluid(maxWidth: 590, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`
