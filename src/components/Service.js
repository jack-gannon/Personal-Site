import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"
import { rhythm } from "../utils/typography"
import { breakpoints } from "../utils/breakpoints"
import SalWrapper from "./SalWrapper"

class Service extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisplayed: false,
    }
    this.handleSalInAction = this.handleSalInAction.bind(this)
    this.handleSalOutAction = this.handleSalOutAction.bind(this)
  }

  handleSalInAction() {
    this.setState(state => ({
      isDisplayed: true,
    }))
  }

  handleSalOutAction() {
    this.setState(state => ({
      isDisplayed: false,
    }))
  }

  render() {
    const { reverse, title } = this.props
    return (
      <StyledSal
        dataSal="disabled"
        salInAction={this.handleSalInAction}
        salOutAction={this.handleSalOutAction}
        delay="0"
      >
        <ServiceWrapper reverse={reverse}>
          <Left
            reverse={reverse}
            className={this.state.isDisplayed ? "active" : "inactive"}
          >
            <img src="./GatsbyScene.svg" alt="Gatsby Scene" />
          </Left>
          <Right
            reverse={reverse}
            className={this.state.isDisplayed ? "active" : "inactive"}
          >
            <ServiceTitle
              reverse={reverse}
              className={this.state.isDisplayed ? "active" : "inactive"}
            >
              {title}
            </ServiceTitle>
            <ServiceBlurb
              reverse={reverse}
              className={this.state.isDisplayed ? "active" : "inactive"}
            >
              This starter comes out of the box with styled components and
              Gatsby's default starter blog running on Netlify CMS. This starter
              comes out of the box with styled components and Gatsby's default
              starter blog running on Netlify CMS. This starter comes out of the
              box with styled components and Gatsby's default starter blog
              running on Netlify CMS.
              <LearnMore
                reverse={reverse}
                className={this.state.isDisplayed ? "active" : "inactive"}
              >
                Learn More
              </LearnMore>
            </ServiceBlurb>
          </Right>
        </ServiceWrapper>
      </StyledSal>
    )
  }
}

const ServiceWrapper = styled.div.attrs(props => ({
  reverse: props.reverse,
}))`
  border: 1px solid ${colors.gray30};
  width: calc(100% - 2rem);
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-bottom: 4rem;
  margin-top: 4rem;

  @media only screen and (min-width: ${breakpoints.tablet.medium}) {
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
    width: 100vw;
    margin-bottom: 8rem;
    margin-left: 0rem;
    margin-right: 0rem;
  }

  @media only screen and (min-width: ${breakpoints.desktop.medium}) {
    width: 100%;
    height: ${rhythm(16)};
    margin-left: 0rem;
    margin-top: 8rem;
    margin-bottom: 8rem;
    & img {
    }
  }
`

const Left = styled.div.attrs(props => ({
  reverse: props.reverse,
}))`
  height: auto;
  padding: 1rem;
  width: 50%;
  transition: background-color 1s ease-in-out;

  &.inactive {
    background-color: ${colors.gray10};
  }

  &.active {
    background-color: ${colors.gray30};
  }

  & img {
    border: 1px solid purple;
    margin-bottom: 0rem;
  }

  @media only screen and (min-width: ${breakpoints.tablet.medium}) {
    flex-basis: 50%;
    height: auto;
  }

  @media only screen and (min-width: ${breakpoints.desktop.medium}) {
    flex-basis: 50%;
    padding: ${props => (props.reverse ? "4% 25% 4% 4%" : "4% 4% 4% 25%")};
    padding: ${props =>
      props.reverse
        ? `4rem calc(50vw - ${rhythm(20)}) 4rem 4rem`
        : `4rem 4rem 4rem calc(50vw - ${rhythm(20)})`};
    height: 100%;
  }
`

const Right = styled.div.attrs(props => ({
  reverse: props.reverse,
}))`
  transition: background-color 1s ease-in-out;
  padding: 1rem;

  &.inactive {
    background-color: ${colors.gray10};
  }

  @media only screen and (min-width: ${breakpoints.tablet.medium}) {
    flex-basis: 50%;
    margin-right: 0rem;

    &.active {
      background-color: #fff;
    }
  }

  @media only screen and (min-width: ${breakpoints.desktop.medium}) {
    flex-basis: 50%;
    box-sizing: border-box;
    background-color: #fff;
    padding: ${props =>
      props.reverse
        ? `4rem 4rem 4rem calc(50vw - ${rhythm(20)})`
        : `4rem calc(50vw - ${rhythm(20)}) 4rem 4rem`};

    &.active {
      background-color: #fff;
    }
  }
`

const ServiceTitle = styled.h3.attrs(props => ({
  reverse: props.reverse,
}))`
  position: relative;
  font-size: 2rem;
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;

  :before {
    content: " ";
    position: absolute;
    width: 1rem;
    height: 1rem;
    left: -2.55rem;
    top: 0.25em;
    border-radius: 8px;
    background-color: ${colors.gray60};
    transform: scale(0, 0);
    transition: transform 0.25s ease;
  }

  :after {
    content: " ";
    position: absolute;
    bottom: -1rem;
    left: 0rem;
    width: 0%;
    height: 4px;
    background-color: ${colors.primary};
    transition: width 0.5s ease-in-out;
  }

  &.inactive {
    opacity: 0.3;
  }

  &.active {
    opacity: 1;

    :before {
      transform: scale(1, 1);
    }

    :after {
      width: 20%;
    }
  }

  @media only screen and (min-width: ${breakpoints.tablet.medium}) {
    text-align: ${props => (props.reverse ? "right" : "left")};
    :before {
      left: ${props => (props.reverse ? "auto" : "-1.5rem")};
      right: ${props => (props.reverse ? "-1.5rem" : "auto")};
    }

    :after {
      left: ${props => (props.reverse ? "auto" : "0rem")};
      right: ${props => (props.reverse ? "0rem" : "auto")};
    }

    &.active {
      :after {
        width: 10%;
      }
    }
  }

  @media only screen and (min-width: ${breakpoints.desktop.small}) {
    font-size: 2rem;
  }

  @media only screen and (min-width: ${breakpoints.desktop.medium}) {
    font-size: 3rem;
    :before {
      left: ${props => (props.reverse ? "auto" : "calc(-4.45rem - 1px)")};
      right: ${props => (props.reverse ? "calc(-4.5rem - 1px)" : "auto")};
    }
  }
`

const ServiceBlurb = styled.p.attrs(props => ({
  reverse: props.reverse,
}))`
  position: relative;
  font-size: 0.875rem;
  border: 1px solid pink;
  width: 100%;
  margin-bottom: 0rem;
  transition: opacity 0.25s ease-in-out;

  &.inactive {
    opacity: 0.3;
  }

  &.active {
    opacity: 1;
  }

  @media only screen and (min-width: ${breakpoints.tablet.medium}) {
    text-align: ${props => (props.reverse ? "right" : "left")};
    font-size: 1rem;
  }

  @media only screen and (min-width: ${breakpoints.desktop.medium}) {
    width: 100%;
    text-align: ${props => (props.reverse ? "right" : "left")};
  }
`

const LearnMore = styled.button.attrs(props => ({
  reverse: props.reverse,
}))`
  position: absolute;
  bottom: -3rem;
  left: 0rem;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  padding: 0.25rem 1rem;
  background-color: transparent;
  border: 2px solid ${colors.gray80};
  text-transform: uppercase;
  transition: opacity 0.25s ease, transform 0.25s ease;

  &.inactive {
    opacity: 0;
    transform: translateX(2rem);
  }

  &.active {
    opacity: 1;
    transform: translateX(0rem);
  }

  @media only screen and (min-width: ${breakpoints.tablet.medium}) {
    right: ${props => (props.reverse ? "0rem" : "auto")};
    left: ${props => (props.reverse ? "auto" : "0rem")};
    transform: ${props =>
      props.reverse ? "translateX(-4rem)" : "translateX(4rem)"};
  }
  }
`

const StyledSal = styled(SalWrapper)``

export default Service
