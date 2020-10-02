import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { colors } from "../../utils/colors"
import styled from "styled-components"
import ArrowIcon from "../vectors/ArrowIcon"
import { breakpoints } from "../../utils/breakpoints"

const PostItemLarge = ({ post }) => {
  const {
    thumbnail,
    title,
    category,
    date,
    description,
  } = post.childMdx.frontmatter
  const { slug } = post.childMdx.fields
  const imgFluid = thumbnail.src.childImageSharp.fluid
  return (
    <Post>
      <ImageLink to={`.${slug}`}>
        <Thumbnail fluid={imgFluid} />
      </ImageLink>
      <Details>
        <Info>
          <Category category={category}>{category}</Category> |
          <Date>{date}</Date>
        </Info>
        <PostTitle>
          <Link to={`.${slug}`}>{title}</Link>
        </PostTitle>
        <Description
          dangerouslySetInnerHTML={
            description
              ? {
                  __html: description,
                }
              : { __html: post.childMdx.excerpt }
          }
        />
      </Details>
      <ReadMore category={category} to={`.${slug}`}>
        <ArrowIcon
          direction="right"
          lineColor={
            category === "Design"
              ? colors.secondaryDarker
              : category === "Development"
              ? colors.primaryDarker
              : colors.tertiaryDarker
          }
          lineWidth="4px"
        />
      </ReadMore>
    </Post>
  )
}

const Post = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  border: 1px solid ${colors.gray30};
  border-radius: 2px;
  background-color: #fff;
  box-shadow: ${colors.shadow1};

  @media (min-width: ${breakpoints.tablet.medium}) {
  }
`

const ImageLink = styled(Link)`
  display: block;
  height: 100%;
  max-height: 12rem;
  width: 100%;
`

const Thumbnail = styled(Image)`
  height: 100%;
  max-height: 12rem;
  width: 100%;
  transition: opacity 0.125s ease;

  @media (min-width: 960px) {
  }
`

const Info = styled.span`
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${colors.gray30};
`

const Details = styled.div`
  width: 100%
  height: 100%;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet.medium}) {
    
  }
`

const Category = styled.p`
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

const PostTitle = styled.h2`
  font-size: 1.25rem;
  margin-top: 0rem;
  margin-bottom: 0.5rem;

  & > :last-child {
    box-shadow: none;
    color: ${colors.gray70};
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`

const Date = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  margin-left: 0.5rem;
  color: ${colors.gray50};
  margin-bottom: 0rem;
  letter-spacing: 0.05rem;
`

const Description = styled.p`
  margin-bottom: 2rem;
  color: ${colors.gray60};
`

const ReadMore = styled(Link).attrs(props => ({
  category: props.category,
}))`
  position: absolute;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  height: 3rem;
  width: 3rem;
  font-size: 1rem;
  padding: 0.875rem;
  box-shadow: none;
  color: ${props =>
    props.category === "Design"
      ? colors.secondaryDarker
      : props.category === "Development"
      ? colors.primaryDarker
      : colors.tertiary};
  background-color: ${props =>
    props.category === "Design"
      ? colors.secondaryLightest
      : props.category === "Development"
      ? colors.primaryLightest
      : colors.tertiaryLightest};

  & svg {
    width: 1.25rem;
  }
`
export default PostItemLarge
