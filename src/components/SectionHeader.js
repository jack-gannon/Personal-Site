import React from "react"
import styled from "styled-components"
import { NavContext } from "../components/layout"
import { breakpoints } from "../utils/breakpoints"
import { colors } from "../utils/colors"

class SectionHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title } = this.props
    return (
      <NavContext.Consumer>
        {showNav => (
          <>
            <Header className={showNav ? "active" : "inactive"}>
              {title}
              <Arrow viewBox="0 0 32 16">
                <polyline points="0,0 16,16 32,0 " />
              </Arrow>
            </Header>
          </>
        )}
      </NavContext.Consumer>
    )
  }
}

const Header = styled.h2`
  position: sticky;
  top: 0rem;
  z-index: 4;
  padding-left: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  font-weight: 500;
  font-size: 1rem;
  color: ${colors.gray70};
  margin-top: 4rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  transition: top 0.5s ease;
  background-color: ${colors.gray10};
  border-bottom: 1px solid ${colors.gray20};

  &:before {
    content: " ";
    position: relative;
  }

  &.active {
    top: 3rem;
  }

  &.inactive {
    top: 0rem;
  }

  @media (min-width: ${breakpoints.tablet.medium}) {
    text-align: center;
    margin-left: 0rem;
  }
`

const Arrow = styled.svg`
  position: absolute;
  display: block;
  width: 2rem;
  height: 1rem;
  fill: ${colors.gray10};
  stroke: ${colors.gray20};
  stroke-width: 1px;
  bottom: -1rem;
  left: 0;

  @media (min-width: ${breakpoints.tablet.medium}) {
    left: calc(50vw - 1rem);
    right: auto;
  }
`
export default SectionHeader
