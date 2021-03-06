import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post
    const siteTitle = this.props.data.site.siteMetadata.title
    const defaultKeywords = [
      "Jack Gannon",
      "designer",
      "developer",
      "web developer",
      "Phoenix",
      "Arizona",
      "freelance web developer",
      "ux designer",
      "ui designer",
      "freelance website designer",
    ]
    const tagKeywords = post.frontmatter.tags.map(tag => tag.name)
    const keywords = defaultKeywords.concat(tagKeywords)

    return (
      <article>
        <Layout
          location={this.props.location}
          title={siteTitle}
          post={post}
          isBlog={true}
          avatar={this.props.data.avatar.childImageSharp.fixed}
          articleLayout={true}
          reverseMain={false}
        >
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
            ogImage={post.frontmatter.ogImage.src.publicURL}
            imageAlt={post.frontmatter.thumbnail.alt}
            keywords={keywords}
          />
          <MDXRenderer>{post.body}</MDXRenderer>
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
        tags {
          name
        }
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
            publicURL
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
