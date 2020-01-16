import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { colors } from "../utils/colors"
import styled from "styled-components"
import ArrowIcon from "./ArrowIcon"

const BlogPostListItem = ({
  title,
  category,
  date,
  description,
  slug,
  imgFluid,
}) => {
  return (
    <Post key={title}>
      <Top>
        <Thumbnail fluid={imgFluid} />
        <Details>
          <Info>
            <Category category={category}>{category}</Category> |
            <Date>{date}</Date>
          </Info>

          <PostTitle>
            <Link to={`blog${slug}`}>{title}</Link>
          </PostTitle>

          <Description
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </Details>
      </Top>
      <ReadMore category={category} to={`blog${slug}`}>
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
  margin-bottom: 2rem;
  border: 1px solid ${colors.gray30};
  border-radius: 2px;
  background-color: #fff;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Thumbnail = styled(Image)`
  height: 9rem;
  width: 100%;
  margin-right: 1rem;

  @media (min-width: 960px) {
    height: 12rem;
  }
`

const Info = styled.span`
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  color: ${colors.gray30};
`

const Details = styled.div`
  flex-basis: 20%;
  width: 100%;
  padding: 1rem;
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

const PostTitle = styled.h3`
  font-size: 1.25rem;
  margin-top: 0rem;
  margin-bottom: 0.5rem;

  & > :last-child {
    box-shadow: none;
    color: ${colors.gray70};
    text-decoration: none;
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
  color: ${colors.gray50};
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
export default BlogPostListItem
