import React from "react"
import styled from "styled-components"
import SocialIconPanelFooter from "../../vectors/social-icons/SocialIconPanelFooter"
import Logo from "../../../../content/assets/logo.svg"
import { colors } from "../../../utils/colors"

const Footer = () => {
  return (
    <FooterWrapper>
      <img
        src={Logo}
        style={{ width: "4rem", marginTop: "1rem", marginBottom: ".5rem" }}
        alt="Jack Gannon Logo"
      />
      <SocialIconPanelFooter />
      <Legal>© {new Date().getFullYear()} Jack Gannon</Legal>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  width: 100vw;
  text-align: center;

  background-color: ${colors.gray20};
`

const Legal = styled.p`
  margin-top: 1rem;
  margin-bottom: 0rem;
  padding-bottom: 1rem;
  font-family: "Helvetica Neue", sans-serif;
`

export default Footer
