import React from "react"
import styled from "styled-components"

const ArrowIcon = ({ direction = "left", lineColor, lineWidth }) => {
  return (
    <>
      {direction === "left" ? (
        <svg x="0px" y="0px" viewBox="0 0 56 56">
          <Line
            x1="51"
            y1="29"
            x2="5"
            y2="29"
            strokeWidth={lineWidth}
            strokeColor={lineColor}
          />
          <Poly
            points="23,47 5,29 23,11 "
            strokeWidth={lineWidth}
            strokeColor={lineColor}
          />
        </svg>
      ) : (
        <svg x="0px" y="0px" viewBox="0 0 56 56">
          <Line
            x1="51"
            y1="29"
            x2="5"
            y2="29"
            strokeWidth={lineWidth}
            strokeColor={lineColor}
          />
          <Poly
            points="33,11 51,29 33,47 "
            strokeWidth={lineWidth}
            strokeColor={lineColor}
          />
        </svg>
      )}
    </>
  )
}

const Line = styled.line.attrs(props => ({
  strokeColor: props.strokeColor,
  strokeWidth: props.strokeWidth,
}))`
  fill: none;
  stroke-width: ${props => props.strokeWidth};
  stroke: ${props => props.strokeColor};

  :focus {
    stroke: #fff;
  }
`

const Poly = styled.polyline.attrs(props => ({
  strokeColor: props.strokeColor,
  strokeWidth: props.strokeWidth,
}))`
  fill: none;
  stroke-width: ${props => props.strokeWidth};
  stroke: ${props => props.strokeColor};
`

export default ArrowIcon
