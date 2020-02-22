import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled, { keyframes } from "styled-components"
import { rhythm } from "../../../utils/typography"
import { colors } from "../../../utils/colors"
import { breakpoints } from "../../../utils/breakpoints"

const FeaturedProjects = () => (
  <StaticQuery
    query={graphql`
      {
        featured1: file(
          sourceInstanceName: { eq: "portfolio" }
          name: { eq: "zesto" }
        ) {
          childMdx {
            frontmatter {
              thumbnail {
                src {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 60) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
            }
            fields {
              slug
            }
          }
        }
        featured2: file(
          sourceInstanceName: { eq: "portfolio" }
          name: { eq: "onq-connect" }
        ) {
          childMdx {
            frontmatter {
              thumbnail {
                src {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 60) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
            }
            fields {
              slug
            }
          }
        }
        featured3: file(
          sourceInstanceName: { eq: "portfolio" }
          name: { eq: "insurance-discourse" }
        ) {
          childMdx {
            frontmatter {
              thumbnail {
                src {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 60) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={data => {
      const { featured1, featured2, featured3 } = data
      return (
        <Slide>
          <Contents>
            <IntroHeader>Featured Projects</IntroHeader>
            <Grid>
              <Project to={`/portfolio/${featured1.childMdx.fields.slug}`}>
                <ProjectImage
                  fluid={
                    featured1.childMdx.frontmatter.thumbnail.src.childImageSharp
                      .fluid
                  }
                  alt={featured1.childMdx.frontmatter.thumbnail.alt}
                />
              </Project>
              <Project to={`/portfolio/${featured2.childMdx.fields.slug}`}>
                <ProjectImage
                  fluid={
                    featured2.childMdx.frontmatter.thumbnail.src.childImageSharp
                      .fluid
                  }
                  alt={featured2.childMdx.frontmatter.thumbnail.alt}
                />
              </Project>
              <Project to={`/portfolio/${featured3.childMdx.fields.slug}`}>
                <ProjectImage
                  fluid={
                    featured3.childMdx.frontmatter.thumbnail.src.childImageSharp
                      .fluid
                  }
                  alt={featured3.childMdx.frontmatter.thumbnail.alt}
                />
              </Project>
            </Grid>
          </Contents>
        </Slide>
      )
    }}
  />
)

const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: scale(.5, .5);

}
100% {
  opacity: 1;
}
`

const Slide = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${colors.gray10};

  @media (min-width: ${breakpoints.tablet.small}) {
    justify-content: center;
  }
`

const Grid = styled.div`
  margin-bottom: 1rem;
  width: 65%;
  @media (min-width: ${breakpoints.tablet.small}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`

const Project = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  padding-bottom: 0rem;
  line-height: 0rem;
  border-radius: 2px;
  opacity: 0;
  transition: all 0.25s ease;
  animation: ${fadeIn} 0.5s ease;
  animation-fill-mode: both;

  &:first-child {
    animation-delay: 1s;
  }

  &:nth-child(2) {
    animation-delay: 1.125s;
  }

  &:last-child {
    animation-delay: 1.25s;
    margin-bottom: 0rem;
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 100%;
    margin-bottom: 0rem;
    height: 18rem;
  }
`

const Contents = styled.div`
  width: 80%;
  height: calc(100% - 12rem);
  margin-left: 1rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
    max-width: ${rhythm(40)};
  }
`

const ProjectImage = styled(Image)`
  height: 100%;
  transition: transform 0.25s ease, opacity 0.25s ease;

  &:hover {
    transform: translateY(-0.5rem);
    opacity: 0.8;
  }
`

const IntroHeader = styled.h2`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1rem;
    text-align: center;
  }
`

export default FeaturedProjects
