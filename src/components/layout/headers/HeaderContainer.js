import React from "react"
import styled from "styled-components"
import { rhythm } from "../../../utils/typography"

const HeaderContainer = ({ children }) => {
  return <Header>{children}</Header>
}

const Header = styled.header`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  width: 100%;
  max-width: ${rhythm(40)};
  margin-top: 4rem;
`

export default HeaderContainer
