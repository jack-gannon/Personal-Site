import React from "react"
import styled from "styled-components"
import { rhythm } from "../../../utils/typography"

const MainContainer = ({ children, fullWidth }) => {
  return <MainWrapper fullWidth={fullWidth}>{children}</MainWrapper>
}

const MainWrapper = styled.main.attrs(props => ({
  fullWidth: props.fullWidth,
}))`
  margin-left: ${props => (props.fullWidth ? "0rem" : "auto")};
  margin-right: ${props => (props.fullWidth ? "0rem" : "auto")};
  padding: ${props => (props.fullWidth ? "0rem" : "1rem")};
  width: 100%;
  max-width: ${props => (props.fullWidth ? "100vw" : rhythm(40))};
  min-height: 100vh;
  background-color: pink;
`

export default MainContainer
