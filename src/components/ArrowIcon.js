import React from "react"

const ArrowIcon = ({ direction = "left", lineColor, lineWidth }) => {
  return (
    <>
      {direction === "left" ? (
        <svg x="0px" y="0px" viewBox="0 0 56 56">
          <line
            x1="51"
            y1="29"
            x2="5"
            y2="29"
            style={{
              fill: "none",
              strokeWidth: lineWidth,
              stroke: lineColor,
            }}
          />
          <polyline
            points="23,47 5,29 23,11 "
            style={{
              fill: "none",
              strokeWidth: lineWidth,
              stroke: lineColor,
            }}
          />
        </svg>
      ) : (
        <svg x="0px" y="0px" viewBox="0 0 56 56">
          <line
            x1="51"
            y1="29"
            x2="5"
            y2="29"
            style={{
              fill: "none",
              strokeWidth: lineWidth,
              stroke: lineColor,
            }}
          />
          <polyline
            points="33,11 51,29 33,47 "
            style={{
              fill: "none",
              strokeWidth: lineWidth,
              stroke: lineColor,
            }}
          />
        </svg>
      )}
    </>
  )
}

export default ArrowIcon
