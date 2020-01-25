import React from "react"
import throttle from "lodash.throttle"
import Navbar from "./Navbar"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDark: this.props.defaultToDark ? true : false,
    }
    this.handleNav = this.handleNav.bind(this)
    this.handleDark = this.handleDark.bind(this)
    this.handleLight = this.handleLight.bind(this)
    // Tracks instance of the event, prevents memory leak
    this.throttleNav = throttle(this.handleNav, 500)
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
      this.props.handleShowNav()
    } else {
      this.props.handleHideNav()
    }
    this.prev = window.scrollY
  }

  render() {
    return (
      <>
        <Navbar
          color={this.state.isDark ? "dark" : "light"}
          showNav={this.props.showNav}
        />
      </>
    )
  }
}

export default Navigation
