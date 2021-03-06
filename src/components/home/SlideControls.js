import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"

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
      <Step
        onClick={() => handlePreviousPage()}
        className={isDark ? "light" : "dark"}
        aria-label={`Previous Slide`}
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
            aria-label={`Go to slide ${index + 1}`}
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
        aria-label={`Next Slide`}
      >
        <svg viewBox="0 0 100 100">
          <polyline points="94,28 50,72 6,28 " />
        </svg>
      </Step>
    </Controls>
  )
}

const Controls = styled.nav`
  display: none;
  z-index: 2;

  @media (min-width: ${breakpoints.tablet.small}) {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 6rem);
    z-index: 2;
    right: 2rem;
    top: 4rem;
    height: 80vh;
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
  padding: 0.25rem;
  border: none;

  & svg {
    width: 1.25rem;
    fill: none;
    stroke: ${colors.gray80};
    stroke-width: 8px;

    .inner {
      transition: transform 1s ease;
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
