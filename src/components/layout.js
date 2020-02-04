import React from "react"
import styled from "styled-components"

import Navigation from "./nav/Navigation"

import BlogCategoryTabs from "./blog/BlogCategoryTabs"
import PortfolioCategoryTabs from "./portfolio/PortfolioCategoryTabs"
import AboutCategoryTabs from "./about/AboutCategoryTabs"
import { breakpoints } from "../utils/breakpoints"

import { rhythm } from "../utils/typography"
import BlogPostHeader from "./layout/headers/BlogPostHeader"
import PortfolioProjectHeader from "./layout/headers/PortfolioProjectHeader"
import HeaderContainer from "./layout/headers/HeaderContainer"

import Footer from "./layout/footers/Footer"

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  // These handle the appearance of the navbar based on
  // the page content

  render() {
    const {
      location,
      children,
      fullWidth = false,
      articleLayout = false,
      asideContents = null,
      post,
      avatar,
      project,
    } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const blogCategory = `${__PATH_PREFIX__}/blog/category/`
    const aboutPath = `${__PATH_PREFIX__}/about/`
    const portfolioPath = `${__PATH_PREFIX__}/portfolio/`
    const portfolioCategory = `${__PATH_PREFIX__}/portfolio/category/`

    let header
    let footer = <Footer />

    if (location.pathname === rootPath) {
      header = (
        <>
          <Navigation defaultToDark={true} />

          {/* <Hero /> */}
        </>
        // <h1
        //   style={{
        //     ...scale(1.5),
        //     marginBottom: rhythm(1.5),
        //     marginTop: 0,
        //   }}
        // >
        //   <Link
        //     style={{
        //       boxShadow: `none`,
        //       textDecoration: `none`,
        //       color: `inherit`,
        //     }}
        //     to={location.pathname === blogPath ? `/blog/` : `/`}
        //   >
        //     {title}
        //   </Link>
        // </h1>
      )

      footer = null
    } else if (
      location.pathname === blogPath ||
      location.pathname.startsWith(blogCategory)
    ) {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
          <PageTitle>Blog</PageTitle>
          <BlogCategoryTabs />
        </HeaderContainer>
      )
    } else if (
      location.pathname !== blogPath &&
      !location.pathname.startsWith(blogCategory) &&
      location.pathname.startsWith(blogPath)
    ) {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
          <BlogPostHeader post={post} avatar={avatar} />
        </HeaderContainer>
      )
    } else if (
      location.pathname === aboutPath ||
      location.pathname.startsWith(aboutPath)
    ) {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
          <PageTitle>About</PageTitle>
          <AboutCategoryTabs />
        </HeaderContainer>
        //
        //   style={{
        //     fontFamily: `Montserrat, sans-serif`,
        //     marginTop: 0,
        //   }}
        // >
        //   <Link
        //     style={{
        //       boxShadow: `none`,
        //       textDecoration: `none`,
        //       color: `inherit`,
        //     }}
        //     to={`/blog/`}
        //   >
        //     {title}
        //   </Link>
        // </h3>
      )
    } else if (
      location.pathname === portfolioPath ||
      location.pathname.startsWith(portfolioCategory)
    ) {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
          <PageTitle>Portfolio</PageTitle>
          <PortfolioCategoryTabs />
        </HeaderContainer>
        //
        //   style={{
        //     fontFamily: `Montserrat, sans-serif`,
        //     marginTop: 0,
        //   }}
        // >
        //   <Link
        //     style={{
        //       boxShadow: `none`,
        //       textDecoration: `none`,
        //       color: `inherit`,
        //     }}
        //     to={`/blog/`}
        //   >
        //     {title}
        //   </Link>
        // </h3>
      )
    } else if (
      location.pathname !== portfolioPath &&
      !location.pathname.startsWith(portfolioCategory) &&
      location.pathname.startsWith(portfolioPath)
    ) {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
          <PortfolioProjectHeader project={project} avatar={avatar} />
        </HeaderContainer>
      )
    } else {
      header = (
        <HeaderContainer>
          <Navigation defaultToDark={false} />
        </HeaderContainer>
      )
    }
    return (
      <>
        {header}
        <BodyContainer
          fullWidth={fullWidth}
          articleLayout={articleLayout}
          asideContents={asideContents}
        >
          <main>{children}</main>
          <aside>{asideContents}</aside>
        </BodyContainer>
        {footer}
      </>
      // <Wrapper>
      //   <div
      //     style={{
      //       marginLeft: `auto`,
      //       marginRight: `auto`,
      //       maxWidth: fullWidth ? "100vw" : rhythm(40),
      //       padding: fullWidth ? "0" : `${rhythm(1.5)} 1rem`,
      //     }}
      //   >
      //     <header style={{ position: "relative" }}>{header}</header>
      //     <main
      //       style={{
      //         marginBottom: "8rem",
      //         marginTop: "4rem",
      //         minHeight: "100vh",
      //       }}
      //     >
      //       {children}
      //     </main>
      //   </div>
      //   <Footer>
      //     <img
      //       src={Logo}
      //       style={{ width: "4rem", marginTop: "1rem", marginBottom: ".5rem" }}
      //       alt="Jack Gannon Logo"
      //     />
      //     <SocialIconPanelFooter />
      //     <Legal>© {new Date().getFullYear()} Jack Gannon</Legal>
      //   </Footer>
      // </Wrapper>
    )
  }
}

const BodyContainer = styled.div.attrs(props => ({}))`
  position: relative;
  margin-left: ${props => (props.fullWidth ? "0rem" : "auto")};
  margin-right: ${props => (props.fullWidth ? "0rem" : "auto")};
  padding: ${props => (props.fullWidth ? "0rem" : "1rem")};
  width: 100%;
  max-width: ${props => (props.fullWidth ? "100vw" : rhythm(40))};
  min-height: 100vh;
  overflow-x: hidden;

  @media (min-width: ${breakpoints.desktop.small}) {
    & main {
      width: ${props => (props.articleLayout ? "67%" : "100%")};
      font-size: ${props => (props.articleLayout ? "18px" : "16px")};
    }
  }
`

const PageTitle = styled.h3`
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(0.25)};
  font-size: 2.5rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 4rem;
  }
`

export default Layout
