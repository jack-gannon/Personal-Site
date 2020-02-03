import React from "react"
import SlideWrapper from "./SlideWrapper"
import IntroSlide from "./slides/IntroSlide"
import FeaturedProjectsSlide from "./slides/FeaturedProjectsSlide"
import BlogSlide from "./slides/BlogSlide"
import WhatIDoSlide from "./slides/WhatIDoSlide"
import SlideControls from "./SlideControls"
import { CSSTransition } from "react-transition-group"

class SlideDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlideIndex: 0,
      slideCollection: [
        { name: "intro", component: <IntroSlide />, theme: "dark" },
        {
          name: "featured projects",
          component: <FeaturedProjectsSlide />,
          theme: "light",
        },
        { name: "what I do", component: <WhatIDoSlide />, theme: "light" },
        { name: "from the blog", component: <BlogSlide />, theme: "light" },
      ],
      transitionDirection: "forward",
    }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleForward = this.handleForward.bind(this)
    this.handleBackward = this.handleBackward.bind(this)
    this.handleNextPage = this.handleNextPage.bind(this)
    this.handlePreviousPage = this.handlePreviousPage.bind(this)
    this.handleJumpToIndex = this.handleJumpToIndex.bind(this)
  }

  componentDidMount = () => {
    this.props.handleDark()
  }

  handleIncrement = () => {
    // If the slide is the last in the group, then
    // the index will reset to the beginning. If not,
    // the current index will increment
    this.state.currentSlideIndex === this.state.slideCollection.length - 1
      ? this.setState({ currentSlideIndex: 0 })
      : this.setState(state => ({
          currentSlideIndex: state.currentSlideIndex + 1,
        }))
  }

  handleDecrement = () => {
    // If the slide is the first in the group, then
    // the index will revert to the last slide. If not,
    // the current index will decrement.
    this.state.currentSlideIndex === 0
      ? this.setState(state => ({
          currentSlideIndex: state.slideCollection.length - 1,
        }))
      : this.setState(state => ({
          currentSlideIndex: state.currentSlideIndex - 1,
        }))
  }

  handleForward = () => {
    this.setState({ transitionDirection: "forward" })
  }

  handleBackward = () => {
    this.setState({ transitionDirection: "backward" })
  }

  handleNextPage = () => {
    this.handleForward()
    this.handleIncrement()
  }

  handlePreviousPage = () => {
    this.handleBackward()
    this.handleDecrement()
  }

  // Occurs when a user presses an indicator button on the
  // slide controls panel.
  handleJumpToIndex = newIndex => {
    let currentIndex = this.state.currentSlideIndex
    if (newIndex === currentIndex) {
      return
    }

    currentIndex > newIndex ? this.handleBackward() : this.handleForward()
    this.setState({ currentSlideIndex: newIndex })
  }

  // Determines if navbar needs to change colors, and
  // makes the change if needed based on methods
  // passed down from props.
  handleNavColor = nextColor => {
    let currentColor = this.props.isDark ? "dark" : "light"
    if (nextColor === currentColor) {
      return
    }
    nextColor === "dark" ? this.props.handleDark() : this.props.handleLight()
  }

  render() {
    return (
      <>
        {this.state.slideCollection.map((slide, index) => (
          <CSSTransition
            key={slide.name}
            in={this.state.currentSlideIndex === index}
            classNames="fade"
            timeout={1000}
            unmountOnExit
            onEntering={() => this.handleNavColor(slide.theme)}
          >
            <SlideWrapper
              direction={this.state.transitionDirection}
              orientation={this.props.orientation}
            >
              {slide.component}
            </SlideWrapper>
          </CSSTransition>
        ))}
        <SlideControls
          slides={this.state.slideCollection}
          handleNextPage={this.handleNextPage}
          handlePreviousPage={this.handlePreviousPage}
          currentSlideIndex={this.state.currentSlideIndex}
          handleJumpToIndex={this.handleJumpToIndex}
          isDark={this.props.isDark}
        />
        )}
      </>
    )
  }
}

SlideDeck.defaultProps = {
  orientation: "horizontal",
}

export default SlideDeck
