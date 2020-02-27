import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"

const CategoryTabs = ({ location, categories }) => {
  return (
    <TabPanel role="tablist">
      {categories.map(category => {
        return (
          <Tab
            key={category.name}
            to={category.path}
            color={category.color}
            activeClassName="activeTab"
            role="tab"
            aria-controls={category.name}
          >
            {category.name}
          </Tab>
        )
      })}
    </TabPanel>
  )
}

const slideIn = keyframes`
  from {
    width: 0%
  }
  to {
    width: 100%;
  }
`

const Tab = styled(Link).attrs(props => ({
  color: props.color,
}))`
  position: relative;
  font-size: 0.875rem;
  box-sizing: border-box;
  flex-basis: auto;
  margin-bottom: 0.25rem;
  height: 2.75rem;
  padding-top: 1rem;
  text-align: center;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 500;
  opacity: 0.8;
  color: ${colors.gray60};
  background-color: none;
  box-shadow: none;
  text-transform: capitalize;
  text-decoration: none;
  transition: opacity 0.25s ease-in-out;

  :focus {
    outline: none;
    border-bottom: ${`4px solid ${colors.gray30}`};
  }

  :hover {
    opacity: 1;
  }

  &.activeTab {
    color: ${colors.gray80};
    opacity: 1;
  }

  &.activeTab:after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${props => props.color};
    animation: ${slideIn} 0.25s ease-in-out;
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1rem;
    margin-right: 3rem;
  }
`

const TabPanel = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 70%;
    justify-content: flex-start;
  }
`

export default CategoryTabs
