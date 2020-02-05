import React from "react"
import styled from "styled-components"

const Logo = ({ color, width, type }) => {
  const StyledLogo = styled.svg`
    width: ${width};
    > * {
      fill: ${type === "path"
        ? color === "dark"
          ? "#4d4d4d"
          : "#FFF"
        : "none"};
    }
    &:hover {
      & polyline,
      line {
        animation: dash 5s linear forwards;
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      }
    }
  `

  const StyledPath = styled.path`
    fill: ${color === "dark" ? "#4d4d4d" : "#FFF"};
  `

  const StyledPolyline = styled.polyline`
    stroke-width: 3px;
    stroke: ${color === "dark" ? "#4d4d4d" : "#eaeaea"};
  `

  const StyledLine = styled.line`
    stroke-width: 3px;
    stroke: ${color === "dark" ? "#4d4d4d" : "#eaeaea"};
  `

  return (
    <StyledLogo x="0px" y="0px" viewBox="0 0 56 48">
      {type === "path" ? (
        <>
          <StyledPath
            d="M54.9,22.1h-8.6l-9.4-9.4l-9.4,9.4H12.3L27.9,6.5l3.8,3.8l1.4-1.4l-5.2-5.2L9.5,22.1H0.9v2h8.6l18.4,18.4
	l18.4-18.4h8.6C54.9,24.1,54.9,22.1,54.9,22.1z M36.9,15.5l6.6,6.6H30.3L36.9,15.5z M27.9,39.7L12.3,24.1h31.2L27.9,39.7z"
          />
        </>
      ) : (
        <>
          <StyledPolyline points="27.9,23.1 36.9,14.1 45.9,23.1 27.9,41.1 9.9,23.1 27.9,5.1 32.4,9.6 	" />
          <StyledLine x1="0.9" y1="23.1" x2="54.9" y2="23.1" />{" "}
        </>
      )}
    </StyledLogo>
  )
}

export default Logo
