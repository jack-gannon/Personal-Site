import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/colors"
import Logo from "../components/Logo"

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
    height: 3rem;
  `

  const NavLink = styled(Link)`
    font-family: "Helvetica Neue", sans-serif;
    font-weight: 800;
    color: ${color === "dark" ? (isExpanded ? "#4d4d4d" : "#FFF") : "#4d4d4d"};
    box-shadow: none;
    margin-right: ${rhythm(1)};

    &:last-child {
      margin-right: 0;
    }
  `
  const NavLinksDesktop = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
      margin-right: auto;
      max-width: ${rhythm(42)};
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
  `

  return (
    <Nav>
      <Link
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          boxShadow: "none",
          padding: `${rhythm(0.25)} ${rhythm(0.125)}`,
          lineHeight: "0rem",
          width: "3rem",
          height: "3rem",
          backgroundColor: color === "dark" ? colors.gray80 : colors.gray20,
        }}
        to="/"
      >
        <Logo color={color === "dark" ? "light" : "dark"} width="2.5rem" />
      </Link>
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
