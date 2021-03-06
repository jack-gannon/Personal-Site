import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { rhythm } from "../../../utils/typography";
import { colors } from "../../../utils/colors";
import { breakpoints } from "../../../utils/breakpoints";

const BackgroundSection = ({ className }) => {
  // Handles focus once component is rendered
  let blogSlideContents = React.createRef();
  useEffect(() => {
    blogSlideContents.current.focus();
  });

  return (
    <StaticQuery
      query={blogSlideQuery}
      render={data => {
        const post = data.allFile.edges[0].node;
        const { title, description, thumbnail } = post.childMdx.frontmatter;
        const backgroundImageData = thumbnail.src.childImageSharp.fluid;
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={backgroundImageData}
            backgroundColor={colors.gray90}
          >
            <Contents ref={blogSlideContents}>
              <SectionHeader>Featured Blog Post</SectionHeader>
              <Details>
                <BlogLink to={`blog${post.childMdx.fields.slug}`}>
                  <BlogTitle>{title}</BlogTitle>
                </BlogLink>
                <Description>{description}</Description>
                <ReadMore to={`blog${post.childMdx.fields.slug}`}>
                  Read More...
                </ReadMore>
              </Details>
            </Contents>
          </BackgroundImage>
        );
      }}
    />
  );
};

const blogSlideQuery = graphql`
  {
    allFile(
      sort: { fields: childMdx___frontmatter___date, order: DESC }
      limit: 1
      filter: {
        sourceInstanceName: { eq: "blog" }
        internal: { mediaType: { regex: "/text/" } }
      }
    ) {
      edges {
        node {
          childMdx {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              category
              author
              description
              thumbnail {
                src {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
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
  }
`;

const slideIn = keyframes`
0% {
  opacity: 0;
  transform: translateX(2rem);

}
100% {
  opacity: 1;
  transform: translateX(0rem);
}
`;

const fadeIn = keyframes`
0% {
  opacity: 0;

}
100% {
  opacity: .8;
}
`;

const StyledBackgroundSection = styled(BackgroundSection)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

const Contents = styled.div`
  width: 80%;
  margin-left: 1rem;

  &:after {
    content: " ";
    position: absolute;
    background-color: ${colors.gray90};
    top: 0rem;
    left: 0rem;
    height: 100%;
    width: 100%;
    opacity: 0.9;
    z-index: 1;
    animation: ${fadeIn} 0.5s ease;
    animation-delay: 1.25s;
    animation-fill-mode: both;
  }

  & * {
    z-index: 2;
    position: relative;
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 100%;
    margin-left: 2rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(40)};
  }
`;

const SectionHeader = styled.h2`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  color: ${colors.gray10};

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Details = styled.div`
  width: 80%;
  animation: ${slideIn} 0.5s ease;
  animation-delay: 1.25s;
  animation-fill-mode: both;

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 60%;
  }
`;

const BlogLink = styled(Link)`
  text-decoration: none;

  &:hover {
    & * {
      opacity: 0.8;
    }
  }
`;

const BlogTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${colors.gray10};

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  width: 100%;
  font-size: 0.875rem;
  margin-bottom: 0rem;
  color: ${colors.gray40};

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1.2rem;
    width: 60%;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 50%;
  }
`;

const ReadMore = styled(Link)`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray10};
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.875rem;
  animation: ${slideIn} 0.5s ease;
  animation-delay: 2.25s;
  animation-fill-mode: both;

  @media (min-width: ${breakpoints.tablet.small}) {
  }
`;

export default StyledBackgroundSection;
