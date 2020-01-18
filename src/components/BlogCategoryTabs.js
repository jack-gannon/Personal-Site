import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { colors } from "../utils/colors"

const BlogCategoryTabs = ({ location }) => {
  return (
    <ButtonPanel>
      <Tab category="All" to="/blog/" activeClassName="activeTab">
        All Posts
      </Tab>
      <Tab
        category="Design"
        to="/blog/category/design-posts"
        activeClassName="activeTab"
      >
        Design
      </Tab>
      <Tab
        category="Development"
        to="/blog/category/development-posts"
        activeClassName="activeTab"
      >
        Development
      </Tab>
      <Tab
        category="Personal"
        to="/blog/category/personal-posts"
        activeClassName="activeTab"
      >
        Personal
      </Tab>
    </ButtonPanel>
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
  category: props.category,
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
    background-color: ${props =>
      props.category === "Design"
        ? colors.secondary
        : props.category === "Development"
        ? colors.primary
        : props.category === "Personal"
        ? colors.tertiaryMedium
        : colors.gray50};
    animation: ${slideIn} 0.25s ease-in-out;
  }
`

const ButtonPanel = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 720px) {
    width: calc(50% - 0.5rem);
  }
`

export default BlogCategoryTabs