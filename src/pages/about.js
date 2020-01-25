import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ImageGallery from "../components/portfolio/ImageGallery"
import { breakpoints } from "../utils/breakpoints"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const aboutImages = [
      { src: "../assets/avatar-pic.jpg", alt: "Me" },
      { src: "../assets/placeholder.png", alt: "Placeholder" },
      { src: "../assets/logo.svg", alt: "logo" },
    ]

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <Personal>
          <ImageGallery images={aboutImages} />
          <Text>
            <h2>Biography</h2>
            <p>
              Hi! My name is Jack Gannon, and I am a designer and developer
              based in Phoenix, Arizona. Ever since I was a little kid, I always
              enjoyed drawing and making things. As an adult, i'm happy to say
              that not much has changed in that regard, the only difference is
              my intention and purpose. I sketch to bring ideas to life. The
              things I build are more technical, and have a greater impact (no
              offense, Lego spaceship, I still appreciate you).
            </p>
            <p>
              I was born and raised in Phoenix, Arizona. In 2015 I received my
              Bachelor's of Science degree in Graphic Information Technology
              from Arizona State University. My focus area was web development
              and design. After graduation, I went to work for a national
              financial firm as a Graphic Designer. I was later promoted to
              Creative Manager, where I managed a team of creative
              professionals. In 2018, my now wife and I took a year to travel
              the world. While abroad, I freelanced and worked on independent
              projects.
            </p>
            <h2>Philosophy</h2>
            <p>
              I love design and web development, because it gives me the
              opportunity to align my work with three of my core personal
              philosophies:
            </p>
            <ul>
              <li>I value creativity and building things.</li>
              <li>I believe in the power of innovation.</li>
              <li>I wish to empower others.</li>
            </ul>
            <p>
              I keep these philosophies at the forefront of every new project I
              start, and revisit them periodically as the project progresses. As
              our society becomes more involved with technology, I see
              tremendous opportunity in enriching peoples' lives through the
              work that we do as designers and developers.
            </p>
          </Text>
        </Personal>
      </Layout>
    )
  }
}

const Personal = styled.article`
  @media (min-width: ${breakpoints.desktop.small}) {
    display: grid;
    grid-template-columns: auto 60%;
    grid-gap: 3rem;
  }
`

const Text = styled.div`
  padding: 1rem;
  @media (min-width: ${breakpoints.desktop.small}) {
    font-size: 1.125rem;
  }
`

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
