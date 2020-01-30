import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import { colors } from "../../utils/colors"

class SectionHeader extends React.Component {
  render() {
    const { title } = this.props
    return (
      <>
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
      </>
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
  font-size: 0.75rem;
  color: ${colors.gray70};
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
    font-size: 1rem;
    text-align: center;
    margin-left: 0rem;
  }
`

const Arrow = styled.svg`
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
  fill: ${colors.gray10};
  stroke: ${colors.gray20};
  stroke-width: 1px;
  bottom: -0.5rem;
  left: 0;

  @media (min-width: ${breakpoints.tablet.medium}) {
    width: 2rem;
    height: 1rem;
    bottom: -1rem;
    left: calc(50vw - 1rem);
    right: auto;
  }
`
export default SectionHeader
