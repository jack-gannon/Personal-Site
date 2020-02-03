import React from "react"

const NavContext = React.createContext({
  isDark: false,
  handleDark: () => {},
  handleLight: () => {},
})

export class NavProvider extends React.Component {
  handleDark = () => {
    this.setState({ isDark: true })
    console.log("its getting dark in here")
  }

  handleLight = () => {
    this.setState({ isDark: false })
    console.log("its getting bright in here")
  }

  state = {
    handleDark: this.handleDark,
    handleLight: this.handleLight,
    isDark: true,
  }

  render() {
    return (
      <NavContext.Provider value={this.state}>
        {this.props.children}
      </NavContext.Provider>
    )
  }
}

export const NavConsumer = NavContext.Consumer
