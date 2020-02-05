import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"
import ArrowIcon from "../vectors/ArrowIcon"

const SlideControls = ({
  slides,
  handleNextPage,
  handlePreviousPage,
  currentSlideIndex,
  handleJumpToIndex,
  isDark,
}) => {
  return (
    <Controls>
      <Indicator>{`0${currentSlideIndex + 1}`}</Indicator>
      <Step
        onClick={() => handlePreviousPage()}
        className={isDark ? "light" : "dark"}
      >
        <svg viewBox="0 0 100 100">
          <polyline points="6,72 50,28 94,72 " />
        </svg>
      </Step>
      <Selectors>
        {slides.map((slide, index) => (
          <Selector
            className={`${
              index === currentSlideIndex ? "active" : "inactive"
            } ${isDark ? "light" : "dark"}`}
            key={slide.name}
            onClick={() => handleJumpToIndex(index)}
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45"></circle>
              <circle className="inner" cx="50" cy="50" r="35"></circle>
            </svg>
          </Selector>
        ))}
      </Selectors>
      <Step
        onClick={() => handleNextPage()}
        className={isDark ? "light" : "dark"}
      >
        <svg viewBox="0 0 100 100">
          <polyline points="94,28 50,72 6,28 " />
        </svg>
      </Step>
    </Controls>
  )
}

const Controls = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  right: 0.25rem;
  top: 3rem;
  height: calc(${window.innerHeight}px - 3rem);
  z-index: 2;

  @media (min-width: ${breakpoints.tablet.small}) {
    right: 2rem;
    top: 4rem;
    height: 80vh;
  }
`

const Indicator = styled.p`
  position: absolute;
  right: 1rem;
  top: -12rem;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  opacity: 0.1;

  @media (min-width: ${breakpoints.tablet.small}) {
    right: 12rem;
    top: -5rem;
    font-size: 16rem;
  }
`

const Step = styled.button`
  border: none;
  padding: 0.4rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;

  & svg {
    width: 1.25rem;
    fill: none;
    stroke: ${colors.gray80};
    stroke-width: 8px;
    transition: stroke 1s ease;
  }

  &.dark {
    & svg {
      stroke: ${colors.gray80};
    }
  }

  &.light {
    svg {
      stroke: ${colors.gray20};
    }
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    & svg {
      stroke-width: 16px;
    }
  }
`

const Selectors = styled.div`
  display: none;
  @media (min-width: ${breakpoints.tablet.small}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    bottom: 4rem;
  }
`

const Selector = styled.button`
  background: transparent;
  height: 2.5rem;
  padding: 0.5rem;
  border: none;

  & svg {
    width: 1.25rem;
    fill: none;
    stroke: ${colors.gray80};
    stroke-width: 8px;
    transition: stroke 1s ease;

    .inner {
      transition: transform 1s ease, fill 1s ease;
      transform-origin: center;
      stroke: none;
    }
  }

  &.dark svg {
    stroke: ${colors.gray80};

    .inner {
      fill: ${colors.gray80};
    }
  }

  &.light svg {
    stroke: ${colors.gray20};

    .inner {
      fill: ${colors.gray20};
    }
  }

  &.active svg {
    .inner {
      transform: scale(1, 1);
    }
  }

  &.inactive svg {
    .inner {
      transform: scale(0, 0);
    }
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    & svg {
      width: 2rem;
    }
  }
`

export default SlideControls
