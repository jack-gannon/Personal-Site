import React from "react"
import styled, { keyframes } from "styled-components"
import { colors } from "../../utils/colors"

const Checkmark = () => {
  return (
    <CheckMarkSvg viewBox="0 0 32 32">
      <Poly points="2.5,16.5 11.5,25.5 30.5,6.5 " />
    </CheckMarkSvg>
  )
}

const checkIn = keyframes`

from {
  
  stroke-dashoffset: 1000;
} to {
  stroke-dashoffset: 0;
}
`

const CheckMarkSvg = styled.svg`
  width: 2rem;
`
const Poly = styled.polyline`
  stroke-dasharray: 1000;
  fill: none;
  stroke: ${colors.primary};
  stroke-width: 4px;
  animation: ${checkIn} 5s ease;
`

export default Checkmark
