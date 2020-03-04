import React, { useState } from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"
import FacebookShare from "./share/FacebookShare"
import TwitterShare from "./share/TwitterShare"
import LinkedInShare from "./share/LinkedInShare"

const SharePanel = ({ url, title, description }) => {
  const [isExpanded, setExpanded] = useState(false)

  const handleToggleExpanded = () => {
    setExpanded(!isExpanded)
  }
  return (
    <>
      <MobilePanel>
        <MobileToggle
          className={isExpanded ? "active" : "inactive"}
          onClick={() => handleToggleExpanded()}
        >
          {isExpanded ? "×" : "Share"}
        </MobileToggle>
        <MobileShareLinks className={isExpanded ? "active" : "inactive"}>
          <FacebookShare url={url} title={title} />
          <TwitterShare url={url} title={title} />
          <LinkedInShare url={url} title={title} description={description} />
        </MobileShareLinks>
      </MobilePanel>
      <DesktopPanel>
        <Label>Share:</Label>
        <FacebookShare url={url} title={title} />
        <TwitterShare url={url} title={title} />
        <LinkedInShare url={url} title={title} description={description} />
      </DesktopPanel>
    </>
  )
}

const MobilePanel = styled.div`
  position: relative;

  @media (min-width: ${breakpoints.desktop.small}) {
    display: none;
  }
`

const MobileToggle = styled.button`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: transparent;

  &.active {
    width: 3rem;
    border: 1px solid ${colors.gray60};
  }

  &.inactive {
    width: 6rem;
    border: 1px solid ${colors.gray30};
  }
`

const MobileShareLinks = styled.div`
  position: absolute;
  top: 3.5rem;
  right: -1.125rem;
  padding: 1rem 1rem;
  height: 4rem;
  width: calc(100vw + 0.125rem);
  background: #fff;
  border: 1px solid ${colors.gray30};
  z-index: 3;

  &.inactive {
    display: none;
  }

  &.active {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  & a {
    fill: ${colors.gray80};
    line-height: 1rem;
    margin-right: 0.25rem;

    &:last-child {
      margin-right: 0rem;
    }

    & svg {
      width: 3rem;
      margin-bottom: 0rem;
    }

    &.share-facebook {
      fill: #3b5998;
    }

    &.share-twitter {
      fill: #00acee;
    }

    &.share-linkedin {
      fill: #4875b4;
    }
  }
`

const DesktopPanel = styled.div`
  display: none;

  @media (min-width: ${breakpoints.desktop.small}) {
    display: flex;
  align-items: center;
  height: 2rem;
  }

  & a {
    fill: ${colors.gray80};
    line-height: 1rem;

    & svg {
      width: 2rem;
      margin-bottom: 0rem;
    }
  }


    & a {
      margin-right: 1rem;

      &:last-child {
        margin-right: 0rem;
      }
    }

    & .share-linkedin:hover {
      fill: #4875b4;
    }

    & .share-twitter:hover {
      fill: #00acee;
    }

    & .share-facebook:hover {
      fill: #3b5998;
    }
  }
`

const Label = styled.p`
  margin-bottom: 0rem;
  margin-right: 1rem;
  line-height: 1rem;
`

export default SharePanel
