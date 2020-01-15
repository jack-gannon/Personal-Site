import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../utils/colors"

const BlogCategoryTabs = ({ location }) => {
  return (
    <ButtonPanel>
      <Tab to="/blog/" activeStyle={activeTabStyle}>
        All Posts
      </Tab>
      <Tab to="/blog/category/design-posts" activeStyle={activeTabStyle}>
        Design
      </Tab>
      <Tab to="/blog/category/development-posts" activeStyle={activeTabStyle}>
        Development
      </Tab>
      <Tab to="/blog/category/personal-posts" activeStyle={activeTabStyle}>
        Personal
      </Tab>
    </ButtonPanel>
  )
}

const activeTabStyle = {
  color: colors.gray80,
  opacity: 1,
  letterSpacing: "0rem",
  boxShadow: `inset 0 -4px 0 0px ${colors.primary}`,
  // borderBottom: `4px solid ${colors.primary}`,
}

const Tab = styled(Link)`
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
  transition: opacity 0.25s ease-in-out;

  :focus {
    outline: none;
    border-bottom: ${`4px solid ${colors.gray30}`};
  }

  :hover {
    opacity: 1;
  }
`
const ButtonPanel = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default BlogCategoryTabs
