import React from "react"
import styled from "styled-components"
import DribbleLogo from "./DribbbleLogo"
import TwitterLogo from "./TwitterLogo"
import GitHubLogo from "./GitHubLogo"
import LinkedInLogo from "./LinkedInLogo"
import { colors } from "../../../utils/colors"

const SocialIconPanelNav = () => {
  return (
    <Panel>
      <a
        href="http://twitter.com/jackgannon_"
        target="_blank"
        title="Twitter"
        rel="noopener noreferrer"
      >
        <TwitterLogo />
      </a>
      <a
        href="http://github.com/jack-gannon"
        target="_blank"
        title="GitHub"
        rel="noopener noreferrer"
      >
        <GitHubLogo />
      </a>
      <a
        href="https://www.linkedin.com/in/jack-gannon/"
        target="_blank"
        title="LinkedIn"
        rel="noopener noreferrer"
      >
        <LinkedInLogo />
      </a>
      <a
        href="https://dribbble.com/jackgannon"
        target="_blank"
        title="Dribbble"
        rel="noopener noreferrer"
      >
        <DribbleLogo />
      </a>
    </Panel>
  )
}

const Panel = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 0rem;
  margin-top: 4rem;
  width: 50%;
  height: auto;

  & * {
    flex-basis: 15%;
    fill: ${colors.gray60};
    box-shadow: none;
    margin-top: 0rem;
  }

  & a {
    display: block;
    margin-right: 0.5rem;
    padding-right: 0rem;
    height: 2.5rem;

    &:first-child {
      margin-top: 0rem;
    }

    &:last-child {
      margin-right: 0rem;
    }
  }

  & svg {
    margin-right: 0rem;
    padding-right: 0rem;
    height: 100%;

    &:first-child {
      margin-top: 0rem;
    }
  }
`

export default SocialIconPanelNav
