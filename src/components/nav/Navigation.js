import React from "react"
import throttle from "lodash.throttle"
import Navbar from "./Navbar"

import { NavConsumer } from "./nav-context"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: true,
    }

    this.handleNav = this.handleNav.bind(this)

    // Tracks instance of the event, prevents memory leak
    this.throttleNav = throttle(this.handleNav, 1000)

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

  componentDidMount() {
    this.prev = window.scrollY
    window.addEventListener("scroll", this.throttleNav, { passive: true })
  }

  componentWillUnmount() {
    this.throttleNav.cancel()
    window.removeEventListener("scroll", this.throttleNav, { passive: true })
  }

  handleNav = e => {
    // Handle dark or light theme - index page only
    // if (this.props.defaultToDark) {
    //   let heroHeight = window.screen.height * 0.9
    //   if (window.scrollY > heroHeight) {
    //     this.handleLight()
    //   } else {
    //     this.handleDark()
    //   }
    // } else {
    //   this.handleLight()
    // }

    // Handle scroll activated nav toggle
    if (this.prev > window.scrollY || window.scrollY < 16) {
      this.handleShowNav()
    } else {
      this.handleHideNav()
    }
    this.prev = window.scrollY
  }

  render() {
    return (
      <>
        <NavConsumer>
          {({ isDark }) => (
            <Navbar
              color={isDark ? "dark" : "light"}
              showNav={this.state.showNav}
            />
          )}
        </NavConsumer>
      </>
    )
  }
}

export default Navigation
