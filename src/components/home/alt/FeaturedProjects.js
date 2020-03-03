import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { rhythm } from "../../../utils/typography"
import { colors } from "../../../utils/colors"
import { breakpoints } from "../../../utils/breakpoints"
import SalWrapper from "../../SalWrapper"

const FeaturedProjects = () => {
  const [isActive, setActive] = useState(false)
  const handleSetActive = () => {
    setActive(true)
  }
  const handleSetInactive = () => {
    setActive(false)
  }
  return (
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
          <Wrapper>
            <SalWrapper
              dataSal="disabled"
              salInAction={() => handleSetActive()}
              salOutAction={() => handleSetInactive()}
            >
              <Contents>
                <IntroHeader className={isActive ? "active" : "inactive"}>
                  Featured Projects
                </IntroHeader>
                <Grid>
                  <Project
                    to={`/portfolio/${featured1.childMdx.fields.slug}`}
                    id="project1"
                    className={isActive ? "active" : "inactive"}
                  >
                    <ProjectImage
                      fluid={
                        featured1.childMdx.frontmatter.thumbnail.src
                          .childImageSharp.fluid
                      }
                      alt={featured1.childMdx.frontmatter.thumbnail.alt}
                    />
                  </Project>
                  <Project
                    to={`/portfolio/${featured2.childMdx.fields.slug}`}
                    id="project2"
                    className={isActive ? "active" : "inactive"}
                  >
                    <ProjectImage
                      fluid={
                        featured2.childMdx.frontmatter.thumbnail.src
                          .childImageSharp.fluid
                      }
                      alt={featured2.childMdx.frontmatter.thumbnail.alt}
                    />
                  </Project>
                  <Project
                    to={`/portfolio/${featured3.childMdx.fields.slug}`}
                    id="project3"
                    className={isActive ? "active" : "inactive"}
                  >
                    <ProjectImage
                      fluid={
                        featured3.childMdx.frontmatter.thumbnail.src
                          .childImageSharp.fluid
                      }
                      alt={featured3.childMdx.frontmatter.thumbnail.alt}
                    />
                  </Project>
                </Grid>
              </Contents>
            </SalWrapper>
          </Wrapper>
        )
      }}
    />
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${colors.gray20};
  padding-top: 10vh;
  padding-bottom: 10vh;

  @media (min-width: ${breakpoints.tablet.small}) {
    justify-content: center;
    padding-top: 10vh;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    justify-content: center;
    padding-top: 20vh;
    padding-bottom: 20vh;
  }
`

const Contents = styled.div`
  width: 100%;
  height: calc(100% - 12rem);
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
    max-width: ${rhythm(40)};
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    padding: 0rem;
  }
`

const Grid = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  @media (min-width: ${breakpoints.tablet.small}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`

const Project = styled(Link)`
  display: block;
  padding-bottom: 0rem;
  margin-bottom: 1rem;
  line-height: 0rem;
  border-radius: 2px;
  transition: opacity 0.5s ease, transform 0.5s ease;

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 100%;
    margin-bottom: 0rem;
    height: 18rem;
    will-change: transform, opacity;

    &#project1 {
      transition-delay: 0.5s;
    }

    &#project2 {
      transition-delay: 0.625s;
    }

    &#project3 {
      transition-delay: 0.75s;
    }

    &.active {
      transform: scale(1, 1);
      opacity 1;
    }

    &.inactive {
      transform: scale(0.5, 0.5);
      opacity 0;
    }
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
    transition: opacity 0.25s ease, transform 0.25s ease;

    &.active {
      transform: translateY(0rem);
      opacity: 1;
    }

    &.inactive {
      transform: translateY(4rem);
      opacity: 0;
    }
  }
`

export default FeaturedProjects
