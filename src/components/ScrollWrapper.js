import React, { Component } from "react"
import throttle from "lodash.throttle"
import { Swipeable } from "react-swipeable"

class ScrollWrapper extends Component {
  constructor(props) {
    super(props)

    // Tracks instance of the event, prevents memory leak
    this.throttleScroll = throttle(this.handleScroll, 1750, { trailing: false })
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
    return (
      <>
        <Swipeable
          onSwipedUp={() => this.props.onScrollDown()}
          onSwipedDown={() => this.props.onScrollUp()}
          preventDefaultTouchmoveEvent={true}
          trackTouch={true}
        >
          {this.props.children}
        </Swipeable>
      </>
    )
  }
}

export default ScrollWrapper
