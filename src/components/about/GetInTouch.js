import React from "react"
import ContactForm from "./ContactForm"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import ContactTopText from "./ContactTopText"

const GetInTouch = () => {
  return (
    <Container className="contact-container">
      <ContactTopText
        headerText="Get In Touch"
        subText="Complete the form below, and I will respond to the email address that you provided as soon as possible."
      />
      <ContactForm />
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
`

export default GetInTouch
