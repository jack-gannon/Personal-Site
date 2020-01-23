import React from "react"
import Service from "./Service"
import SectionHeader from "./SectionHeader"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import { colors } from "../utils/colors"

const Services = () => {
  return (
    <section style={{ position: "relative" }}>
      <Line viewBox="0 0 100 100" preserveAspectRatio="none">
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          vectorEffect="non-scaling-stroke"
        />
      </Line>
      <SectionHeader title="What I Do" />
      <Service title="UX Design" />
      <Service title="UI Design" reverse={true} />
      <Service title="Web Development" />
    </section>
  )
}

const Line = styled.svg`
  position: absolute;
  top: 4rem;
  width: 2rem;
  height: 100%;

  & line {
    stroke: ${colors.gray40};
    stroke-width: 2px;
    stroke-dasharray: 2 4;
  }

  @media (min-width: ${breakpoints.tablet.medium}) {
    left: calc(50vw - 1rem);

    & line {
      stroke: ${colors.gray60};
      stroke-width: 3px;
      stroke-dasharray: 3 6;
    }
  }
`

export default Services
