import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { rhythm } from "../../utils/typography"
import { breakpoints } from "../../utils/breakpoints"
import SalWrapper from "../SalWrapper"
import { Link } from "gatsby"

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
    const { reverse, title, children, path } = this.props
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
              {children}
            </ServiceBlurb>
            <LearnMore
              to={path}
              reverse={reverse}
              className={this.state.isDisplayed ? "active" : "inactive"}
            >
              Learn More
            </LearnMore>
          </Right>
        </ServiceWrapper>
      </StyledSal>
    )
  }
}

const ServiceWrapper = styled.div.attrs(props => ({
  reverse: props.reverse,
}))`
  width: calc(100% - 2rem);
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
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
  transition: opacity 1s ease-in-out;
  padding: 1rem;

  &.inactive {
    opacity: 0.3;
  }

  @media only screen and (min-width: ${breakpoints.tablet.medium}) {
    flex-basis: 50%;
    margin-right: 0rem;

    &.active {
      opacity: 1;
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

  :after {
    content: " ";
    position: absolute;
    bottom: -1rem;
    left: 0rem;
    width: 20%;
    height: 4px;
    background-color: ${colors.primary};
    transform: scaleX(0);
    transform-origin: ${props => (props.reverse ? "right" : "left")};
    transition: transform 0.5s ease-in-out;
  }

  &.inactive {
    opacity: 0.3;
  }

  &.active {
    opacity: 1;

    :after {
      transform: scaleX(1);
    }
  }

  @media only screen and (min-width: ${breakpoints.tablet.medium}) {
    text-align: ${props => (props.reverse ? "right" : "left")};
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
  }
`

const ServiceBlurb = styled.p.attrs(props => ({
  reverse: props.reverse,
}))`
  position: relative;
  color: ${colors.gray70};
  font-size: 0.875rem;
  width: 100%;
  margin-bottom: 0.5rem;
  transition: opacity 0.25s ease-in-out;

  &.inactive {
    opacity: 0.3;
  }

  &.active {
    opacity: 1;
  }

  @media only screen and (min-width: ${breakpoints.tablet.medium}) {
    text-align: ${props => (props.reverse ? "right" : "left")};
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  @media only screen and (min-width: ${breakpoints.desktop.medium}) {
    width: 100%;
    font-size: 1.25rem;
    text-align: ${props => (props.reverse ? "right" : "left")};
  }
`

const LearnMore = styled(Link).attrs(props => ({
  reverse: props.reverse,
}))`
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
  color: ${colors.gray60};

  &.inactive {
    opacity: 0.4;
  }

  &.active {
    opacity: 1;
  }

  @media only screen and (min-width: ${breakpoints.desktop.small}) {
    font-size: 0.75rem;
    text-transform: uppercase;
    padding: 0.25rem 1rem;
    text-decoration: none;
    background-color: transparent;
    border: 2px solid ${colors.gray60};
    transition: opacity 0.25s ease;
    float: ${props => (props.reverse ? "right" : "left")};

    &:hover {
      color: #fff;
      border-color: ${colors.gray70};
      background-color: ${colors.gray70};
    }
  }
`

const StyledSal = styled(SalWrapper)``

export default Service
