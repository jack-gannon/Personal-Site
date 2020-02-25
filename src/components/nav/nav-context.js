import React from "react"

const NavContext = React.createContext({
  isDark: false,
  handleDark: () => {},
  handleLight: () => {},
})

export class NavProvider extends React.Component {
  handleDark = () => {
    this.setState({ isDark: true })
  }

  handleLight = () => {
    this.setState({ isDark: false })
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
