import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"

const PageTitle = ({ text }) => {
  return <Title>{text}</Title>
}

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 0.175em;
  font-weight: 200;
  color: ${colors.gray70};
  border-bottom: 1px solid ${colors.gray30};
`

export default PageTitle
