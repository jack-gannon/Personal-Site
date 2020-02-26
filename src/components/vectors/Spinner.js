import React from "react"
import styled, { keyframes } from "styled-components"
import { colors } from "../../utils/colors"

const Spinner = () => {
  return (
    <SpinnerSvg viewBox="0 0 32 32">
      <PrimaryPath d="M16,29C8.82,29,3,23.18,3,16c0-3.13,1.1-6,2.94-8.24" />
      <GrayPath d="M5.94,7.76C8.33,4.85,11.95,3,16,3c7.18,0,13,5.82,13,13s-5.82,13-13,13" />
    </SpinnerSvg>
  )
}

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`

const SpinnerSvg = styled.svg`
  width: 2rem;
  stroke-width: 4px;
  animation: ${rotate} 0.5s linear infinite;
`

const PrimaryPath = styled.path`
  fill: none;
  stroke: ${colors.primary};
`

const GrayPath = styled.path`
  fill: none;
  stroke: ${colors.gray20};
`

export default Spinner
