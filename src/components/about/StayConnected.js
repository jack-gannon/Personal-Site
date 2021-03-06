import React from "react"
import styled from "styled-components"
import ContactTopText from "./ContactTopText"
import { breakpoints } from "../../utils/breakpoints"
import { colors } from "../../utils/colors"
import StayConnectedImage from "../../../content/assets/stay-connected.jpg"

const StayConnected = () => {
  return (
    <Container className="contact-container">
      <Image src={StayConnectedImage} />
      <Content>
        <ContactTopText
          headerText="Stay Connected"
          subText="Keep up to date with my latest activity by following me on these social media accounts:"
        />
        <List>
          <Item>
            <a
              href="https://twitter.com/jackgannon_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Label>Twitter:</Label>
              <Value>jackgannon_</Value>
            </a>
          </Item>
          <Item>
            <a
              href="https://linkedin.com/in/jack-gannon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Label>LinkedIn:</Label>
              <Value>jack-gannon</Value>
            </a>
          </Item>
          <Item>
            <a
              href="https://twitter.com/jackgannon_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Label>GitHub:</Label>
              <Value>jack-gannon</Value>
            </a>
          </Item>
          <Item>
            <a
              href="https://dribbble.com/jackgannon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Label>Dribbble:</Label>
              <Value>jackgannon</Value>
            </a>
          </Item>
        </List>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  font-family: "Helvetica Neue", sans-serif;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid ${colors.gray20};
  border-radius: 4px;
  box-shadow: ${colors.shadow1};

  @media (min-width: ${breakpoints.tablet.small}) {
    display: flex;
    flex-direction: row-reverse;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    flex-direction: column;
  }
`

const Image = styled.img`
  margin: -1rem;
  margin-bottom: 1rem;
  object-fit: cover;
  border-bottom: 2px solid ${colors.primaryLight};
  height: 10rem;
  width: calc(100% + 2rem);
  max-width: calc(100% + 2rem);
  opacity: 0.65;

  @media (min-width: ${breakpoints.tablet.small}) {
    width: 50%;
    height: auto;
    margin: -1rem;
    margin-left: 0rem;
    border-bottom: none;
    border-left: 2px solid ${colors.primaryLight};
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    width: calc(100% + 2rem);
    margin-left: -1rem;
    margin-bottom: 2rem;
    height: 12rem;
    border-left: none;
    border-bottom: 2px solid ${colors.primaryLight};
  }
`

const Content = styled.div`
  @media (min-width: ${breakpoints.tablet.small}) {
    width: 50%;
    margin-right: 1rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 100%;
    margin-right: 0rem;
  }
`

const List = styled.ul`
  font-family: "Helvetica Neue", sans-serif;
  list-style: none;
  margin-left: 0rem;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
  }
`

const Item = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    color: ${colors.gray70};
    text-decoration: none;
  }

  border-bottom: 1px solid ${colors.gray20};
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: 0rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:hover {
    background-color: ${colors.primaryLightest};

    & span:first-child {
      transform: translateX(0.5rem);
    }

    & span:last-child {
      color: ${colors.gray80};
    }
  }

  @media (min-width: ${breakpoints.tablet.small}) {
  }
`

const Label = styled.span`
  font-weight: 600;
  display: flex;
  transition: transform 0.25s ease;
  margin-left: 1rem;
`

const Value = styled.span`
  color: ${colors.gray60};
  margin-right: 1rem;
`

export default StayConnected
