import React from "react"
import Service from "./Service"
import SectionHeader from "./SectionHeader"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import { colors } from "../../utils/colors"

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
      <Service title="UX Design" path="/about/skills-services#ux-skills">
        Your users are unique. They deserve a unique experience. I research your
        users and apply that knowledge to create meaningful digital products.
      </Service>
      <Service title="UI Design" reverse={true}>
        An intuitive and aesthetically pleasing user interface is crucial to any
        digital product. I design interfaces that are easy to use while looking
        great across all devices.
      </Service>
      <Service title="Web Development">
        Using the latest tools and technologies, I build, deploy, and maintain
        performant websites and web applications.
      </Service>
    </section>
  )
}

const Line = styled.svg`
  position: absolute;
  top: 4rem;
  width: 1rem;
  z-index: 3;
  height: 100%;

  & line {
    stroke: ${colors.gray40};
    stroke-width: 2px;
    stroke-dasharray: 2 4;
  }
  @media (min-width: ${breakpoints.tablet.medium}) {
    left: calc(50vw - 1rem);
    width: 2rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    & line {
      stroke: ${colors.gray50};
      stroke-width: 3px;
      stroke-dasharray: 3 6;
    }
  }
`

export default Services
