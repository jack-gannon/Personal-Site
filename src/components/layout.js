import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"
import Hero from "./home/Hero"
import Navigation from "./nav/Navigation"
import Logo from "../../content/assets/logo.svg"
import SocialIconPanelFooter from "./vectors/social-icons/SocialIconPanelFooter"
import BlogCategoryTabs from "./blog/BlogCategoryTabs"
import PortfolioCategoryTabs from "./portfolio/PortfolioCategoryTabs"
import AboutCategoryTabs from "./about/AboutCategoryTabs"
import { breakpoints } from "../utils/breakpoints"

import { rhythm } from "../utils/typography"

export const NavContext = React.createContext()

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: true,
    }
    this.handleHideNav = this.handleHideNav.bind(this)
    this.handleShowNav = this.handleShowNav.bind(this)
  }

  handleHideNav() {
    this.setState(state => ({
      showNav: false,
    }))
  }

  handleShowNav() {
    this.setState(state => ({
      showNav: true,
    }))
  }

  render() {
    const { location, children, fullWidth = false } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const blogCategory = `${__PATH_PREFIX__}/blog/category/`
    const aboutPath = `${__PATH_PREFIX__}/about/`
    const portfolioPath = `${__PATH_PREFIX__}/portfolio/`
    const portfolioCategory = `${__PATH_PREFIX__}/portfolio/category/`

    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <Navigation
            handleHideNav={this.handleHideNav}
            handleShowNav={this.handleShowNav}
            showNav={this.state.showNav}
            defaultToDark={true}
          />
          <Hero />
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
    } else if (
      location.pathname === blogPath ||
      location.pathname.startsWith(blogCategory)
    ) {
      header = (
        <>
          <Navigation
            handleHideNav={this.handleHideNav}
            handleShowNav={this.handleShowNav}
            showNav={this.state.showNav}
            defaultToDark={false}
          />
          <PageTitle>Blog</PageTitle>
          <BlogCategoryTabs />
        </>
      )
    } else if (
      location.pathname === aboutPath ||
      location.pathname.startsWith(aboutPath)
    ) {
      header = (
        <>
          <Navigation
            handleHideNav={this.handleHideNav}
            handleShowNav={this.handleShowNav}
            showNav={this.state.showNav}
            defaultToDark={false}
          />
          <PageTitle>About</PageTitle>
          <AboutCategoryTabs />
        </>
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
        <>
          <Navigation
            handleHideNav={this.handleHideNav}
            handleShowNav={this.handleShowNav}
            showNav={this.state.showNav}
            defaultToDark={false}
          />
          <PageTitle>Portfolio</PageTitle>
          <PortfolioCategoryTabs />
        </>
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
    } else {
      header = (
        <>
          <Navigation
            handleHideNav={this.handleHideNav}
            handleShowNav={this.handleShowNav}
            showNav={this.state.showNav}
            defaultToDark={false}
          />
        </>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: fullWidth ? "100vw" : rhythm(40),
            padding: fullWidth ? "0" : `${rhythm(1.5)} 1rem`,
          }}
        >
          <header style={{ position: "relative" }}>{header}</header>
          <NavContext.Provider value={this.state.showNav}>
            <main style={{ marginBottom: "8rem", marginTop: "4rem" }}>
              {children}
            </main>
          </NavContext.Provider>
        </div>
        <Footer>
          <img
            src={Logo}
            style={{ width: "4rem", marginTop: "1rem", marginBottom: ".5rem" }}
            alt="Jack Gannon Logo"
          />
          <SocialIconPanelFooter />
          <Legal>© {new Date().getFullYear()} Jack Gannon</Legal>
        </Footer>
      </Wrapper>
    )
  }
}
const PageTitle = styled.h3`
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(0.25)};
  font-size: 2.5rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 4rem;
  }
`

const Wrapper = styled.div`
  position: relative;
  background-color: ${colors.gray10};
`

const Footer = styled.footer`
  width: 100vw;
  text-align: center;

  background-color: ${colors.gray20};
`

const Legal = styled.p`
  margin-top: 1rem;
  margin-bottom: 0rem;
  padding-bottom: 1rem;
  font-family: "Helvetica Neue", sans-serif;
`

export default Layout
