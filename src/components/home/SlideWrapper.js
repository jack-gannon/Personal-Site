import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import { colors } from "../../utils/colors"

const SlideWrapper = ({ children, direction, orientation }) => {
  return (
    <Slide orientation={orientation}>
      <Contents className={direction}>{children}</Contents>
    </Slide>
  )
}

const Slide = styled.div.attrs(props => ({
  orientation: props.orientation,
}))`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  background-color: ${colors.gray30};

  &.fade-enter {
    opacity: 0;

    .backward {
      transform: ${props =>
        props.orientation === "horizontal"
          ? "translateX(-100vw)"
          : "translateY(-100vh)"};
      
    }

    .forward {
      transform: ${props =>
        props.orientation === "horizontal"
          ? "translateX(100vw)"
          : "translateY(100vh)"};
      
    }
  }

  &.fade-enter-active {
    opacity 1;
    transition: opacity 1000ms, transform 1000ms;

    .backward {
      transform: ${props =>
        props.orientation === "horizontal"
          ? "translateX(0vw)"
          : "translateY(0vh)"};
      transition: transform 1000ms;
    }

    .forward {
      transform: ${props =>
        props.orientation === "horizontal"
          ? "translateX(0vw)"
          : "translateY(0vh)"};
      transition: transform 1000ms;
    }
  }

  &.fade-exit {
    opacity 1;

    .backward {
      transform: ${props =>
        props.orientation === "horizontal"
          ? "translateX(0vw)"
          : "translateY(0vh)"};
    }

    .forward {
      transform: ${props =>
        props.orientation === "horizontal"
          ? "translateX(0vw)"
          : "translateY(0vh)"};
      
    }
    
  }

  &.fade-exit-active {
    opacity 0;
    transition: opacity 1000ms;

    .backward {
      transform: ${props =>
        props.orientation === "horizontal"
          ? "translateX(100vw)"
          : "translateY(100vh)"};
      transition: transform 1000ms;
    }

    .forward {
      transform: ${props =>
        props.orientation === "horizontal"
          ? "translateX(-100vw)"
          : "translateY(-100vh)"};
      transition: transform 1000ms;
    }
  }

`

const Contents = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  height: 100vh;
  width: 100vw;
`
export default SlideWrapper
