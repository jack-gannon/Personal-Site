import React from "react"
import styled from "styled-components"
import DribbleLogo from "./DribbbleLogo"
import TwitterLogo from "./TwitterLogo"
import CodePenLogo from "./CodePenLogo"
import GitHubLogo from "./GitHubLogo"
import { colors } from "../../../utils/colors"

const SocialIconPanelFooter = () => {
  return (
    <Panel>
      <a
        href="http://twitter.com/jackgannon_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterLogo />
      </a>
      <a
        href="http://github.com/jack-gannon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubLogo />
      </a>
      <a
        href="https://codepen.io/jackgannon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodePenLogo />
      </a>
      <a
        href="https://dribbble.com/jackgannon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DribbleLogo />
      </a>
    </Panel>
  )
}

const Panel = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 560px;
  margin: auto;

  & * {
    flex-basis: 11%;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    fill: ${colors.gray50};
    box-shadow: none;
  }
`

export default SocialIconPanelFooter
