import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"

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
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  will-change: transform, opacity;
  transform: translateZ(0);

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
    transition: opacity 1000ms, transform 1000ms;

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

  @media (min-width ${breakpoints.tablet.small}) {
    height: 100vh;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
  @media (min-resolution: 192dpi) {
    &.fade-enter {
      opacity: 0;
  
      .backward {
        transform: none;
        
      }
  
      .forward {
        transform: none;
      }
    }
  
    &.fade-enter-active {
      opacity 1;
      transition: opacity 1000ms;
  
      .backward {
        transform: none;
      }
  
      .forward {
        transform: none;
        transition: transform 1000ms;
      }
    }
  
    &.fade-exit {
      opacity 1;
  
      .backward {
        transform: none;
      }
  
      .forward {
        transform: none;
        
      }
      
    }
  
    &.fade-exit-active {
      opacity 0;
      transition: opacity 1000ms;
  
      .backward {
        transform: none;
      }
  
      .forward {
        transform: none;
      }
    }
  }
}

`

const Contents = styled.div.attrs(props => ({}))`
  position: absolute;
  top: 0rem;
  right: 0rem;
  height: 100%;
  width: 100vw;
  will-change: transform, opacity;


  @media (min-width ${breakpoints.tablet.small}) {
    height: 100vh;
  }
`
export default SlideWrapper
