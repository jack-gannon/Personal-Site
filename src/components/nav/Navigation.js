import React from "react"
import throttle from "lodash.throttle"
import Navbar from "./Navbar"

export const NavContext = React.createContext()

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: true,
    }
    this.handleNav = this.handleNav.bind(this)
    // this.handleDark = this.handleDark.bind(this)
    // this.handleLight = this.handleLight.bind(this)
    // Tracks instance of the event, prevents memory leak
    this.throttleNav = throttle(this.handleNav, 500)

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

  // handleDark() {
  //   this.setState(state => ({
  //     isDark: true,
  //   }))
  // }

  componentDidMount() {
    this.prev = window.scrollY
    window.addEventListener("scroll", this.throttleNav)
    this.props.defaultToDark && this.props.handleDark()
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
        this.props.handleLight()
      } else {
        this.props.handleDark()
      }
    } else {
      this.props.handleLight()
    }

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
        <Navbar
          color={this.props.navIsDark ? "dark" : "light"}
          showNav={this.state.showNav}
        />
      </>
    )
  }
}

export default Navigation
