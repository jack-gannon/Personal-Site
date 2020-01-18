import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { colors } from "../utils/colors"
import { rhythm } from "../utils/typography"

function FeaturedPost() {
  return (
    <StaticQuery
      query={featuredPostQuery}
      render={data => {
        const post = data.allMdx.edges[0].node
        const {
          title,
          date,
          description,
          thumbnail,
          category,
        } = post.frontmatter
        const { fields } = post
        return (
          <Container>
            <MainImage fluid={thumbnail.childImageSharp.fluid} />
            <Details>
              <Title>{title}</Title>
              <Info>
                <Category category={category}>{category}</Category> |
                <Date>{date}</Date>
              </Info>
              <Description>{description}</Description>
              <ReadMore to={`blog${fields.slug}`}>Read More...</ReadMore>
            </Details>

            {/* <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            /> */}
            {/* <h3>{title}</h3>
            <p>{date}</p>
            <p>{description}</p> */}
          </Container>
        )
      }}
    />
  )
}

const featuredPostQuery = graphql`
  query FeaturedPostQuery {
    allMdx(
      limit: 1
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { content_type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            category
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 590) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 30)
        }
      }
    }
  }
`

const Container = styled.div`
  margin-left: -1rem;
  position: relative;
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(2)};
  border-bottom: 1px solid ${colors.gray30};
  width: 100vw;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 67% 33%;
    grid-gap: 1rem;
    margin-left: 0rem;
    width: 100%;
    border: 1px solid ${colors.gray20};
    background-color: #fff;
  }
`

const MainImage = styled(Image)`
  width: 100vw;
  height: ${rhythm(16)};

  @media (min-width: 960px) {
    margin-left: 0rem;
    width: 100%;
  }
`

const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  width: 80vw;
  background-color: #fff;

  @media (min-width: 780px) {
    position: relative;
    width: 100%;
  }
`

const Title = styled.h3`
  margin-bottom: ${rhythm(0.5)};
  font-size: 1.875rem;
  color: ${colors.gray70};

  @media (min-width: 960px) {
    font-size: 2.75rem;
  }
`

const Info = styled.p`
  display: flex;
  margin-bottom: ${rhythm(0.125)};
  font-size: 0.875rem;
  font-family: "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", sans-serif;
  color: ${colors.gray30};
`

const Date = styled.span`
  color: ${colors.gray50};
  margin-left: 0.5rem;
`

const Category = styled.p.attrs(props => ({
  category: props.category,
}))`
  text-transform: uppercase;
  font-family: "Helvetica Neue", sans-serif;
  color: ${props =>
    props.category === "Design"
      ? colors.secondary
      : props.category === "Development"
      ? colors.primary
      : colors.tertiaryMedium};
  font-weight: 600;
  letter-spacing: 0.125rem;
  margin-right: 0.5rem;
  margin-bottom: 0rem;
`

const Description = styled.p`
  margin-bottom: ${rhythm(1)};
  color: ${colors.gray60};
`

const ReadMore = styled(Link).attrs(props => ({
  category: props.category,
}))`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  font-family: "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
  letter-spacing: 0.125rem;
  color: ${props =>
    props.category === "Design"
      ? colors.secondaryDarker
      : props.category === "Development"
      ? colors.primaryDarker
      : colors.tertiaryDarker};

  background-color: ${props =>
    props.category === "Design"
      ? colors.secondaryLightest
      : props.category === "Development"
      ? colors.primaryLightest
      : colors.tertiaryLightest};
`

export default FeaturedPost
