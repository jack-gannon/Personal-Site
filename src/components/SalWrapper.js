import React from "react"

class SalWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisplayed: false,
    }
    // Create reference to DOM node for sal:in event
    this.salWrapRef = React.createRef()
    this.handleSetDisplay = this.handleSetDisplay.bind(this)
    this.handleRemoveDisplay = this.handleRemoveDisplay.bind(this)
  }

  handleSetDisplay() {
    this.props.salInAction()
    this.setState(state => ({
      isDisplayed: true,
    }))
  }

  handleRemoveDisplay() {
    this.props.salOutAction()
    this.setState(state => ({
      isDisplayed: false,
    }))
  }

  componentDidMount() {
    this.salWrapRef.current.addEventListener("sal:in", () =>
      this.handleSetDisplay()
    )

    this.salWrapRef.current.addEventListener("sal:out", () =>
      this.handleRemoveDisplay()
    )
  }

  render() {
    const { dataSal = "fade", ease = "ease", delay = "500" } = this.props
    return (
      <div
        data-sal={dataSal}
        data-sal-delay={delay}
        data-sal-easing={ease}
        ref={this.salWrapRef}
      >
        {this.props.children}
      </div>
    )
  }
}

export default SalWrapper
