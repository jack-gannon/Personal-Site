import React from "react"
import styled, { keyframes } from "styled-components"

const Error = () => {
  return (
    <ErrorSvg viewBox="0 0 32 32">
      <Line x1="2.5" y1="2.5" x2="29.5" y2="29.5" />
      <Line x1="29.5" y1="2.5" x2="2.5" y2="29.5" />
    </ErrorSvg>
  )
}

const xIn = keyframes`
from {
  stroke-dashoffset: 1000;
} to {
  stroke-dashoffset: 0;
}
`

const ErrorSvg = styled.svg`
  width: 2rem;
`
const Line = styled.line`
  stroke-dasharray: 1000;
  fill: none;
  stroke: red;
  stroke-width: 4px;
  animation: ${xIn} 4s ease;
`

export default Error
