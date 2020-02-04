import React, { Component } from "react"
import throttle from "lodash.throttle"
import debounce from "lodash.debounce"

class ScrollWrapper extends Component {
  constructor(props) {
    super(props)

    // Tracks instance of the event, prevents memory leak
    this.throttleScroll = throttle(this.handleScroll, 1500, { trailing: false })
  }

  componentDidMount() {
    window.addEventListener("wheel", this.throttleScroll)
  }

  componentWillUnmount() {
    this.throttleScroll.cancel()
    window.removeEventListener("wheel", this.throttleScroll)
  }

  handleScroll = e => {
    const delta = Math.sign(e.deltaY)
    if (delta < 0) {
      this.props.onScrollUp()
    } else if (delta > 0) {
      this.props.onScrollDown()
    }
  }

  render() {
    return <>{this.props.children}</>
  }
}

export default ScrollWrapper
