import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { breakpoints } from "../../utils/breakpoints";
import { rhythm } from "../../utils/typography";

const FeaturedPost = ({ featuredPost }) => {
  const {
    thumbnail,
    title,
    category,
    date,
    description,
  } = featuredPost.childMdx.frontmatter;
  const { fields } = featuredPost.childMdx;

  return (
    <Container>
      <MainImageLink to={`/blog${fields.slug}`}>
        <MainImage
          fluid={thumbnail.src.childImageSharp.fluid}
          alt={thumbnail.alt}
        />
      </MainImageLink>
      <Details>
        <Title>
          <Link to={`/blog${fields.slug}`}>{title}</Link>
        </Title>
        <Info>
          <Category category={category}>{category}</Category> |
          <Date>{date}</Date>
        </Info>
        <Description>{description}</Description>
        <ReadMore to={`/blog${fields.slug}`} category={category}>
          Read More...
        </ReadMore>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  margin-left: -1rem;
  position: relative;
  border-bottom: 1px solid ${colors.gray30};
  width: 100vw;
  margin-bottom: 2rem;
  box-shadow: ${colors.shadow1};

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 67% auto;
    grid-gap: 1rem;
    margin-left: 0rem;
    margin-bottom: 0rem;
    width: 100%;
    border: 1px solid ${colors.gray30};
    background-color: #fff;
  }
`;

const MainImageLink = styled(Link)``;

const MainImage = styled(Image)`
  width: 100vw;
  height: ${rhythm(14)};
  transition: opacity 0.125s ease;

  @media (min-width: 960px) {
    margin-left: 0rem;
    width: 100%;
  }
`;

const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  width: 80vw;
  background-color: #fff;

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 60vw;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    position: relative;
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: ${rhythm(0.5)};
  font-size: 1.875rem;

  & > :last-child {
    color: ${colors.gray80};
    text-decoration: none;
  }

  @media (min-width: 960px) {
    font-size: 2.25rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Info = styled.p`
  display: flex;
  margin-bottom: ${rhythm(0.125)};
  font-size: 0.875rem;
  font-family: "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", sans-serif;
  color: ${colors.gray30};
`;

const Date = styled.span`
  color: ${colors.gray50};
  margin-left: 0.5rem;
`;

const Category = styled.span.attrs(props => ({
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
`;

const Description = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  line-height: 1.75em;
  margin-bottom: ${rhythm(1)};
  color: ${colors.gray60};
`;

const ReadMore = styled(Link).attrs(props => ({
  category: props.category,
}))`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
  letter-spacing: 0.125rem;
  transition: opacity .125s ease;
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
  
  }
  &:hover {
    opacity: 0.75;
`;

export default FeaturedPost;
