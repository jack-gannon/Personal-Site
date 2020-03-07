import React, { Component } from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../utils/colors"
import { rhythm } from "../../utils/typography"
import { breakpoints } from "../../utils/breakpoints"
import Logo from "../vectors/Logo"
import SocialIconPanelNav from "../vectors/social-icons/SocialIconPanelNav"

class NavbarNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false,
    }
    this.handleNavToggle = this.handleNavToggle.bind(this)
  }

  handleNavToggle() {
    this.setState(state => ({
      isExpanded: !state.isExpanded,
    }))
  }

  render() {
    return (
      <Nav
        className={this.props.showNav ? "visible" : "hidden"}
        color={this.props.color}
        role="navigation"
      >
        <LogoLink to="/" color={this.props.color}>
          <Logo
            color={this.props.color === "dark" ? "light" : "dark"}
            width="2.5rem"
          />
          <span className="sr-only">Home</span>
        </LogoLink>
        <NavLinksDesktop>
          <NavLink
            color={this.props.color}
            activeClassName="activeLink"
            partiallyActive={true}
            to="/portfolio/"
          >
            Portfolio
          </NavLink>
          <NavLink
            color={this.props.color}
            activeClassName="activeLink"
            partiallyActive={true}
            to="/blog/"
          >
            Blog
          </NavLink>
          <NavLink
            color={this.props.color}
            activeClassName="activeLink"
            partiallyActive={true}
            to="/about/"
          >
            About
          </NavLink>
          <NavLink
            color={this.props.color}
            activeClassName="activeLink"
            partiallyActive={true}
            to="/contact/"
          >
            Contact
          </NavLink>
        </NavLinksDesktop>
        <NavLinksToggle
          color={this.props.color}
          expanded={this.state.isExpanded}
          onClick={() => this.handleNavToggle()}
          type="button"
          aria-pressed={this.state.isExpanded}
          aria-expanded={this.state.isExpanded}
        >
          {this.state.isExpanded ? (
            "×"
          ) : (
            <ToggleGraphic
              color={this.props.color === "dark" ? "light" : "dark"}
            />
          )}
        </NavLinksToggle>
        <NavLinksMobile
          expanded={this.state.isExpanded}
          aria-hidden={this.state.isExpanded}
        >
          <NavLink
            to="/"
            onClick={() => this.handleNavToggle()}
            className="navLink"
            activeStyle={{
              borderRight: `8px solid ${colors.primary}`,
              paddingRight: ".5rem",
            }}
            partiallyActive={false}
          >
            <Logo color="dark" width="3.5rem" />
            <span className="sr-only">Home</span>
          </NavLink>
          <NavLink
            to="/portfolio/"
            onClick={() => this.handleNavToggle()}
            className="navLink"
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
            onClick={() => this.handleNavToggle()}
            className="navLink"
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
            onClick={() => this.handleNavToggle()}
            className="navLink"
            activeStyle={{
              borderRight: `8px solid ${colors.primary}`,
              paddingRight: ".5rem",
            }}
            partiallyActive={true}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => this.handleNavToggle()}
            className="navLink"
            activeStyle={{
              borderRight: `8px solid ${colors.primary}`,
              paddingRight: ".5rem",
            }}
            partiallyActive={true}
          >
            Contact
          </NavLink>
          <SocialIconPanelNav />
        </NavLinksMobile>
      </Nav>
    )
  }
}

const ToggleGraphic = ({ color }) => (
  <ToggleSvg color={color} viewBox="0 0 32 32">
    <line x1="4" y1="6.5" x2="28" y2="6.5" />
    <line x1="4" y1="26.5" x2="28" y2="26.5" />
    <line x1="4" y1="16.5" x2="28" y2="16.5" />
  </ToggleSvg>
)

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.95;
  }
  `

const Nav = styled.nav.attrs(props => ({
  color: props.color,
}))`
  position: fixed;
  left: 0rem;
  top: 0rem;
  z-index: 5;
  width: 100vw;
  height: 3rem;
  background-color: ${props =>
    props.color === "dark" ? colors.gray80 : colors.gray10};
  border-bottom: 1px solid
    ${props => (props.color === "dark" ? colors.gray80 : colors.gray20)};
  transition: transform 0.5s ease;

  &.visible {
    transform: translateY(0rem);
  }

  &.hidden {
    transform: translateY(-3rem);
  }

  @media (min-width: ${breakpoints.desktop.small}) {
  }
`

const NavLink = styled(Link).attrs(props => ({
  expanded: props.expanded,
  color: props.color,
}))`
  position: relative;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 700;
  letter-spacing: 0.05rem;
  color: ${props =>
    props.color === "dark" ? (props.expanded ? "#4d4d4d" : "#FFF") : "#4d4d4d"};
  box-shadow: none;
  margin-right: ${rhythm(1)};
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }

  &:last-child {
    margin-right: 0rem;
  }

  &.activeLink {
    opacity: 1;
    &:before {
      position: absolute;
      top: 0rem;
      left: 0;
      content: " ";
      width: 100%;
      height: 4px;
      background-color: ${colors.primary};
    }
  }

  @media only screen and (min-width: ${breakpoints.desktop.medium}) {
    opacity: 0.7;
    line-height: ${rhythm(1.5)};
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 0rem;
    margin-right: 2.5rem;

    &:last-child {
      margin-right: 0rem;
    }
  }
`

const LogoLink = styled(Link).attrs(props => ({
  color: props.color,
}))`
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  line-height: 0rem;
  width: 3rem;
  height: 3rem;
  background-color: ${props =>
    props.color === "dark" ? colors.gray90 : colors.gray20};
  box-shadow: none;
  padding: 0.5rem 0.25rem;

  & svg {
  }

  @media only screen and (min-width: ${breakpoints.desktop.medium}) {
    position: fixed;
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
  @media (min-width: ${breakpoints.desktop.small}) {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(40)};
  }
`

const NavLinksToggle = styled.button.attrs(props => ({
  expanded: props.expanded,
  color: props.color,
}))`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  right: 0;
  z-index: 6;
  height: 3rem;
  width: 3rem;
  max-width: 48px;
  max-height: 48px;
  font-size: 2rem;
  line-height: 0rem;
  background-color: ${props =>
    props.expanded
      ? colors.secondary
      : props.color === "dark"
      ? colors.gray70
      : colors.gray30};

  padding: 0.5rem 0.25rem;
  border: none;
  @media (min-width: ${breakpoints.desktop.small}) {
    display: none;
  }
`

const ToggleSvg = styled.svg.attrs(props => ({
  color: props.color,
}))`
  width: 1.5rem;
  height: 2rem;

  & * {
    stroke: ${props =>
      props.color === "dark" ? colors.gray70 : colors.gray30};
    stroke-width: 3px;
  }
`

const NavLinksMobile = styled.div.attrs(props => ({
  isExpanded: props.expanded,
}))`
  display: ${props => (props.isExpanded ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  color: red;
  width: 100vw;
  height: 100vh;
  opacity: 0.95;
  background-color: ${colors.gray10};
  animation: ${fadeIn} 0.25s ease-in-out;

  & .navLink {
    width: 100%;
    line-height: 1.75rem;
    text-align: right;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 2rem;
    padding-right: 1rem;
    border-bottom: 1px solid ${colors.gray20};

    &:first-child {
      margin-top: 8.5rem;
      height: 3rem;
      border-top: 1px solid ${colors.gray20};

      & svg {
        margin-top: -1rem;
      }
    }
  }
`

export default NavbarNew
