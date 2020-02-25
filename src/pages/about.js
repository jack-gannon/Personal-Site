import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import GatsbyImageGallery from "../components/portfolio/GatsbyImageGallery"
import { breakpoints } from "../utils/breakpoints"
import PageTitle from "../components/about/PageTitle"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const aboutImages = [
      {
        mainImage: data.me.edges[0].node.childImageSharp.mainImage,
        thumbImage: data.me.edges[0].node.childImageSharp.thumbImage,
        alt: "man in collared shirt against white background",
        caption: "Yours truly",
      },
      {
        mainImage: data.cambodia.edges[0].node.childImageSharp.mainImage,
        thumbImage: data.cambodia.edges[0].node.childImageSharp.thumbImage,
        alt:
          "man in sunglasses with backpack stands in front of overgrown jungle temple",
        caption: "Me in Cambodia",
      },
      {
        mainImage: data.wedding.edges[0].node.childImageSharp.mainImage,
        thumbImage: data.wedding.edges[0].node.childImageSharp.thumbImage,
        alt: "couple in formal attire kissing in beautiful old building",
        caption: "My lovely wife and I getting hitched in Italy",
      },
    ]

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <PageTitle text="Personal" />
        <Personal>
          <GatsbyImageGallery images={aboutImages} />
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
  @media (min-width: ${breakpoints.desktop.small}) {
    font-size: 1.125rem;
    padding: 1rem;
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
    me: allFile(filter: { name: { eq: "me" } }) {
      edges {
        node {
          childImageSharp {
            mainImage: fluid(maxWidth: 1248) {
              ...GatsbyImageSharpFluid
            }
            thumbImage: fluid(maxWidth: 180) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    cambodia: allFile(filter: { name: { eq: "cambodia" } }) {
      edges {
        node {
          childImageSharp {
            mainImage: fluid(maxWidth: 1248) {
              ...GatsbyImageSharpFluid
            }
            thumbImage: fluid(maxWidth: 180) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    wedding: allFile(filter: { name: { eq: "wedding" } }) {
      edges {
        node {
          childImageSharp {
            mainImage: fluid(maxWidth: 1248) {
              ...GatsbyImageSharpFluid
            }
            thumbImage: fluid(maxWidth: 180) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
