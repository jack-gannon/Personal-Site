import React from "react"
import styled from "styled-components"
import throttle from "lodash.throttle"
import NavbarNew from "./NavbarNew"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: true,
      isDark: this.props.defaultToDark ? true : false,
    }
    this.handleHideNav = this.handleHideNav.bind(this)
    this.handleShowNav = this.handleShowNav.bind(this)
    this.handleNav = this.handleNav.bind(this)
    this.handleDark = this.handleDark.bind(this)
    this.handleLight = this.handleLight.bind(this)
    // Tracks instance of the event, prevents memory leak
    this.throttleNav = throttle(this.handleNav, 500)
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

  handleDark() {
    this.setState(state => ({
      isDark: true,
    }))
  }

  handleLight() {
    this.setState(state => ({
      isDark: false,
    }))
  }

  componentDidMount() {
    this.prev = window.scrollY
    window.addEventListener("scroll", this.throttleNav)
  }

  componentWillUnmount() {
    this.throttleNav.cancel()
    window.removeEventListener("scroll", this.throttleNav)
  }

  handleNav = e => {
    // Handle dark or light theme - index page only
    if (this.props.defaultToDark) {
      let heroHeight = window.screen.height * 0.9
      if (window.scrollY > heroHeight) {
        this.handleLight()
      } else {
        this.handleDark()
      }
    } else {
      this.handleLight()
    }

    // Handle scroll activated nav toggle
    if (this.prev > window.scrollY || window.scrollY === 0) {
      this.handleShowNav()
    } else {
      this.handleHideNav()
    }
    this.prev = window.scrollY
  }

  render() {
    return (
      <>
        <NavbarNew
          color={this.state.isDark ? "dark" : "light"}
          showNav={this.state.showNav}
        />
      </>
    )
  }
}

export default Navigation
