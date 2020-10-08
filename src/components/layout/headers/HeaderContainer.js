import React from "react"
import styled from "styled-components"
import { rhythm } from "../../../utils/typography"
import { breakpoints } from "../../../utils/breakpoints"

const HeaderContainer = ({ children }) => {
  return <Header>{children}</Header>
}

const Header = styled.header`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  width: 100%;
  max-width: ${rhythm(36)};
  margin-top: 4rem;
  overflow-x: hidden;

  @media (min-width: ${breakpoints.tablet.medium}) {
    overflow-x: visible;
  }
`

export default HeaderContainer
