import React from "react";
import styled from "styled-components";
import Navigation from "./nav/Navigation";
import BlogCategoryTabs from "./blog/BlogCategoryTabs";
import AboutCategoryTabs from "./about/AboutCategoryTabs";
import { breakpoints } from "../utils/breakpoints";
import { colors } from "../utils/colors";
import { rhythm } from "../utils/typography";
import BlogPostHeader from "./layout/headers/BlogPostHeader";
import BlogFooter from "../components/layout/footers/BlogFooter";
import PortfolioProjectHeader from "./layout/headers/PortfolioProjectHeader";
import HeaderContainer from "./layout/headers/HeaderContainer";

import Footer from "./layout/footers/Footer";

class Layout extends React.Component {
  render() {
    const {
      location,
      children,
      fullWidth = false,
      fullHeight = false,
      isBlog = false,
      articleLayout = false,
      reverseMain = false,
      asideContents = null,
      post,
      avatar,
      project,
    } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const blogPath = `${__PATH_PREFIX__}/blog/`;
    const blogCategory = `${__PATH_PREFIX__}/blog/category/`;
    const aboutPath = `${__PATH_PREFIX__}/about/`;
    const contactPath = `${__PATH_PREFIX__}/contact/`;
    const portfolioPath = `${__PATH_PREFIX__}/portfolio/`;
    const portfolioCategory = `${__PATH_PREFIX__}/portfolio/category/`;

    let header;
    let footer = <Footer />;
    console.log(location);
    if (
      // Home Page
      location.pathname === rootPath
    ) {
      header = (
        <>
          <Navigation defaultToDark={true} />
        </>
      );
      footer = null;
    } else if (
      // Blog Pages
      location.pathname === blogPath ||
      location.pathname === `${blogPath}/` ||
      location.pathname.startsWith(blogCategory)
    ) {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
          <PageTitle>Blog</PageTitle>
          <BlogCategoryTabs location={location} />
        </HeaderContainer>
      );
    } else if (
      // Blog Post
      location.pathname !== blogPath &&
      !location.pathname.startsWith(blogCategory) &&
      location.pathname.startsWith(blogPath)
    ) {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
          <BlogPostHeader post={post} avatar={avatar} location={location} />
        </HeaderContainer>
      );
      footer = <BlogFooter post={post} />;
    } else if (
      // About Pages
      location.pathname === aboutPath ||
      location.pathname.startsWith(aboutPath)
    ) {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
          <PageTitle>About</PageTitle>

          <AboutCategoryTabs />
        </HeaderContainer>
      );
    } else if (
      // Portfolio Pages
      location.pathname === portfolioPath ||
      location.pathname.startsWith(portfolioCategory)
    ) {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
          <PageTitle>Portfolio</PageTitle>
        </HeaderContainer>
      );
    } else if (
      // Portfolio Entry
      location.pathname !== portfolioPath &&
      !location.pathname.startsWith(portfolioCategory) &&
      location.pathname.startsWith(portfolioPath)
    ) {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
          <PortfolioProjectHeader project={project} avatar={avatar} />
        </HeaderContainer>
      );
    } else if (
      // Contact Page
      location.pathname === contactPath
    ) {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
          <PageTitle>Contact</PageTitle>
        </HeaderContainer>
      );
    } else {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
        </HeaderContainer>
      );
    }
    return (
      <>
        {header}
        <BodyContainer
          fullWidth={fullWidth}
          fullHeight={fullHeight}
          articleLayout={articleLayout}
          asideContents={asideContents}
          reverseMain={reverseMain}
        >
          <main role="main" className={isBlog ? "blog-main" : null}>
            {children}
          </main>
          <aside>{asideContents}</aside>
        </BodyContainer>
        {footer}
      </>
    );
  }
}

const BodyContainer = styled.div.attrs(props => ({
  articleLayout: props.articleLayout,
  reverseMain: props.reverseMain,
}))`
  position: relative;
  margin-left: ${props => (props.fullWidth ? "0rem" : "auto")};
  margin-right: ${props => (props.fullWidth ? "0rem" : "auto")};
  padding: ${props => (props.fullWidth ? "0rem" : "1rem")};
  width: 100%;
  max-width: ${props => (props.fullWidth ? "100vw" : rhythm(36))};
  min-height: ${props => (props.fullHeight ? "100vh" : "70vh")};
  overflow-x: hidden;
  display: ${props => (props.articleLayout ? "flex" : "block")};
  flex-direction: ${props => (props.reverseMain ? "column-reverse" : "column")};

  @media (min-width: ${breakpoints.desktop.small}) {
    flex-direction: ${props => (props.reverseMain ? "row-reverse" : "row")};
    justify-content: space-between;
    overflow-x: visibile;

    & main {
      font-size: ${props => (props.articleLayout ? "18px" : "16px")};
      flex-basis: 67%;
    }

    & main.blog-main {
      & :first-letter {
        color: ${colors.gray90};
        float: left;
        font-family: Georgia;
        font-size: 72px;
        line-height: 60px;
        padding-top: 4px;
        padding-right: 8px;
        padding-left: 3px;
      }
    }

    & aside {
      flex-basis: calc(33% - 4rem);
    }
  }

  @media (min-width: ${breakpoints.desktop.large}) {
    max-width: ${props => (props.fullWidth ? "100vw" : rhythm(40))};
`;

const PageTitle = styled.h3`
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(0.25)};
  font-size: 2.5rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 4rem;
  }
`;

export default Layout;
