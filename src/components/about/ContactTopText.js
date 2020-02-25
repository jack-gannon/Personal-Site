import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"

const ContactTopText = ({ headerText, subText }) => (
  <div>
    <TopTextHeader>{headerText}</TopTextHeader>
    <SubText>{subText}</SubText>
  </div>
)

const TopTextHeader = styled.h3`
  margin-bottom: 0.5rem;
`

const SubText = styled.p`
  color: ${colors.gray70};
  margin-bottom: 2rem;
  width: 100%;
  line-height: 1.5rem;

  @media (min-width: ${breakpoints.desktop.small}) {
  }
`

export default ContactTopText
