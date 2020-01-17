import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/colors"
import Logo from "../components/Logo"
import { breakpoints } from "../utils/breakpoints"

const Navbar = ({ color, location, isAbout, isBlog }) => {
  const [isExpanded, setExpanded] = useState(false)

  const handleNavToggle = () => {
    setExpanded(!isExpanded)
  }

  const Nav = styled.nav`
    position: fixed;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: 5;
    padding: ${rhythm(0.25)};
    background-color: ${color === "dark" ? colors.gray70 : colors.gray20};
    border-bottom: 1px solid ${color === "dark" ? colors.gray70 : colors.gray20};
    height: 3rem;

    @media (min-width: ${breakpoints.desktop.small}) {
    }
  `

  const NavLink = styled(Link)`
    font-family: "Helvetica Neue", sans-serif;
    font-weight: 700;
    letter-spacing: 0.05rem;
    color: ${color === "dark" ? (isExpanded ? "#4d4d4d" : "#FFF") : "#4d4d4d"};
    box-shadow: none;
    margin-right: ${rhythm(1)};
    text-decoration: none;

    &:last-child {
      margin-right: 0;
    }

    @media only screen and (min-width: ${breakpoints.desktop.medium}) {
      font-size: 1.5rem;
      font-weight: 600;
    }
  `

  // <Link
  //       style={{
  //         position: "fixed",
  //         left: 0,
  //         top: 0,
  //         boxShadow: "none",
  //         padding: `${rhythm(0.25)} ${rhythm(0.125)}`,
  //         lineHeight: "0rem",
  //         width: "3rem",
  //         height: "3rem",
  //         backgroundColor: color === "dark" ? colors.gray80 : colors.gray20,
  //       }}
  //       to="/"

  const LogoLink = styled(Link)`
    position: fixed;
    left: 0;
    top: 0;
    box-sizing: border-box;
    line-height: 0rem;
    width: 3rem;
    height: 3rem;
    background-color: ${color === "dark" ? colors.gray80 : colors.gray20};
    box-shadow: none;
    margin-right: ${rhythm(1)};

    padding: 0.5rem 0.25rem;

    & svg {
    }

    @media only screen and (min-width: ${breakpoints.desktop.medium}) {
      width: 6rem;
      height: 6rem;
      padding: 1.25rem 0.75rem;

      & svg {
        width: 4rem;
      }
    }
  `

  const NavLinksDesktop = styled.div`
    display: none;
    @media (min-width: ${breakpoints.tablet.small}) {
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
      margin-right: auto;
      max-width: ${rhythm(40)};
    }
  `

  const NavLinksMobile = styled.div`
    display: ${isExpanded ? "flex" : "none"};
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    color: red;
    width: 100vw;
    height: 100vh;
    opacity: 0.95;
    background-color: ${colors.gray10};
    animation: fadeIn 0.25s ease-in-out;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.95;
      }
    }

    & * {
      width: 100%;
      height: 2rem;
      line-height: 1.75rem;
      text-align: right;
      margin-bottom: 1.5rem;
      font-size: 2rem;
      padding-right: 1rem;
    }

    & *:first-child {
      margin-top: 8rem;
    }
  `

  const NavLinksToggle = styled.button`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 6;
    height: 3rem;
    width: 3rem;
    background-color: ${isExpanded
      ? colors.secondary
      : color === "dark"
      ? colors.gray60
      : colors.gray30};
    border: none;

    @media (min-width: ${breakpoints.tablet.small}) {
      display: none;
    }
  `

  return (
    <Nav>
      <LogoLink to="/">
        <Logo color={color === "dark" ? "light" : "dark"} width="2.5rem" />
      </LogoLink>
      <NavLinksDesktop>
        <NavLink
          activeStyle={{ boxShadow: `inset 0 -3px 0 0 ${colors.primary}` }}
          to="/"
        >
          <span>Home</span>
        </NavLink>
        <NavLink
          activeStyle={{ boxShadow: `inset 0 -3px 0 0 ${colors.primary}` }}
          partiallyActive={true}
          to="/portfolio/"
        >
          Portfolio
        </NavLink>
        <NavLink
          activeStyle={{ boxShadow: `inset 0 -3px 0 0 ${colors.primary}` }}
          partiallyActive={true}
          to="/blog/"
        >
          Blog
        </NavLink>
        <NavLink
          activeStyle={{ boxShadow: `inset 0 -3px 0 0 ${colors.primary}` }}
          partiallyActive={true}
          to="/about/"
        >
          About
        </NavLink>
      </NavLinksDesktop>
      <NavLinksToggle onClick={() => handleNavToggle()}>
        {isExpanded ? "x" : "..."}
      </NavLinksToggle>
      <NavLinksMobile>
        <NavLink
          to="/"
          onClick={() => handleNavToggle()}
          activeStyle={{
            borderRight: `8px solid ${colors.primary}`,
            paddingRight: ".5rem",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/portfolio/"
          onClick={() => handleNavToggle()}
          activeStyle={{
            borderRight: `8px solid ${colors.primary}`,
            paddingRight: ".5rem",
          }}
          partiallyActive={true}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/blog/"
          onClick={() => handleNavToggle()}
          activeStyle={{
            borderRight: `8px solid ${colors.primary}`,
            paddingRight: ".5rem",
          }}
          partiallyActive={true}
        >
          Blog
        </NavLink>
        <NavLink
          to="/about/"
          onClick={() => handleNavToggle()}
          activeStyle={{
            borderRight: `8px solid ${colors.primary}`,
            paddingRight: ".5rem",
          }}
          partiallyActive={true}
        >
          About
        </NavLink>
      </NavLinksMobile>
    </Nav>
  )
}

export default Navbar
