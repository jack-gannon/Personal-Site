import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../utils/colors"
import Navbar from "../components/Navbar"
import Logo from "../../content/assets/logo.svg"
import SocialIconPanelFooter from "./social-icons/SocialIconPanelFooter"
import BlogCategoryTabs from "./BlogCategoryTabs"
import PortfolioCategoryTabs from "./PortfolioCategoryTabs"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const blogCategory = `${__PATH_PREFIX__}/blog/category/`
    const aboutPath = `${__PATH_PREFIX__}/about/`
    const portfolioPath = `${__PATH_PREFIX__}/portfolio/`
    const portfolioCategory = `${__PATH_PREFIX__}/portfolio/category/`

    let header

    if (location.pathname === rootPath) {
      header = (
        <Navbar color="dark" location={location}></Navbar>
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
          <Navbar color="white" location={location}></Navbar>
          <PageTitle>Blog</PageTitle>
          <BlogCategoryTabs />
        </>
      )
    } else if (location.pathname === aboutPath) {
      header = (
        <>
          <Navbar color="white" location={location}></Navbar>
          <PageTitle>About</PageTitle>
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
          <Navbar color="white" location={location}></Navbar>
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
          <Navbar color="white" location={location}></Navbar>
        </>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(40),
            padding: `${rhythm(1.5)} 1rem`,
          }}
        >
          <header>{header}</header>
          <main style={{ marginBottom: rhythm(8) }}>{children}</main>
        </div>
        <Footer>
          <img
            src={Logo}
            style={{ width: "4rem", marginTop: "1rem", marginBottom: ".5rem" }}
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
`

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${colors.gray10};
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  text-align: center;
  margin: none;
  margin-bottom: 0;
  background-color: ${colors.gray20};
`

const Legal = styled.p`
  margin-top: 1rem;
  margin-bottom: 0rem;
  padding-bottom: 1rem;
  font-family: "Helvetica Neue", sans-serif;
`

export default Layout
