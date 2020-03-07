import React from "react"
import ContactForm from "./ContactForm"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"
import ContactTopText from "./ContactTopText"
import GetInTouchImg from "../../../content/assets/get-in-touch.jpg"

const GetInTouch = () => {
  return (
    <Container className="contact-container">
      <Image src={GetInTouchImg} />
      <Content>
        <ContactTopText
          headerText="Get In Touch"
          subText="Complete the form below, and I will respond to the email address that you provided as soon as possible."
        />
        <ContactForm />
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
`

const Content = styled.div``

const Image = styled.img`
  margin: -1rem -1rem 1rem -1rem;
  object-fit: cover;
  width: calc(100% + 2rem);
  max-width: calc(100% + 2rem);
  height: 10rem;

  @media (min-width: ${breakpoints.desktop.small}) {
    margin-bottom: 1.325rem;
    height: 12rem;
    width: calc(100% + 2rem);
    max-width: calc(100% + 2rem);
    border-bottom: 2px solid ${colors.gray30};
  }
`

export default GetInTouch
