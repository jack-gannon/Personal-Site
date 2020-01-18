import React from "react"
import styled from "styled-components"
import throttle from "lodash.throttle"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: true,
    }
    this.handleHideNav = this.handleHideNav.bind(this)
    this.handleShowNav = this.handleShowNav.bind(this)
    this.handleNav = this.handleNav.bind(this)
  }

  handleHideNav() {
    console.log("hiding...")
    this.setState(state => ({
      showNav: false,
    }))
  }

  handleShowNav() {
    console.log("showing...")
    this.setState(state => ({
      showNav: true,
    }))
  }

  componentDidMount() {
    this.prev = window.scrollY
    window.addEventListener(
      "scroll",
      throttle(e => this.handleNav(e), 1000)
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      throttle(e => this.handleNav(e), 1000)
    )
  }

  handleNav = e => {
    if (this.prev > window.scrollY) {
      this.handleShowNav()
    } else {
      this.handleHideNav()
    }
    this.prev = window.scrollY
  }

  render() {
    return (
      <>
        <NavItem className={this.state.showNav ? "visible" : "hidden"}>
          {this.state.showNav ? "show" : "hide"}
        </NavItem>
      </>
    )
  }
}

const NavItem = styled.p`
  position: fixed;
  top: 4rem;
  z-index: 5;
  padding: 0.25rem 0.5rem;
  background-color: #fff;
  transition: top 0.5s ease-in-out;

  &.visible {
    top: 2rem;
  }

  &.hidden {
    top: -3rem;
  }
`

export default Navigation
