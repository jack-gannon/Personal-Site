import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../../utils/typography"
import { colors } from "../../../utils/colors"
import { breakpoints } from "../../../utils/breakpoints"
import SalWrapper from "../../SalWrapper"

const WhatIDo = () => {
  const [isActive, setActive] = useState(false)

  const handleSetActive = () => {
    setActive(true)
  }

  const handleSetInactive = () => {
    setActive(false)
  }

  return (
    <Wrapper>
      <StyledSal
        dataSal="disabled"
        salInAction={() => handleSetActive()}
        salOutAction={() => handleSetInactive()}
      >
        <Contents>
          <SectionHeader className={isActive ? "active" : "inactive"}>
            What I Do
          </SectionHeader>

          <Grid className={isActive ? "active" : "inactive"}>
            <Service id="service1" className={isActive ? "active" : "inactive"}>
              <ServiceHeader>Web Development</ServiceHeader>
              <Description>
                I use the latest web technologies to build performant websites
                and web applications.
              </Description>
              <LearnMoreDesktop to="/about/skills-services">
                Learn More
              </LearnMoreDesktop>
            </Service>
            <Service id="service2" className={isActive ? "active" : "inactive"}>
              <ServiceHeader>UX Design</ServiceHeader>
              <Description>
                I research users and apply that knowledge to create meaningful
                digital experiences.
              </Description>
              <LearnMoreDesktop to="/about/skills-services#ux-skills">
                Learn More
              </LearnMoreDesktop>
            </Service>
            <Service id="service3" className={isActive ? "active" : "inactive"}>
              <ServiceHeader>UI Design</ServiceHeader>
              <Description>
                I design intuitive, easy-to-use interfaces that look great
                across all devices.
              </Description>
              <LearnMoreDesktop to="/about/skills-services#ui-skills">
                Learn More
              </LearnMoreDesktop>
            </Service>
          </Grid>
        </Contents>
      </StyledSal>
    </Wrapper>
  )
}

const StyledSal = styled(SalWrapper)``

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  padding-top: 5vh;

  @media (min-width: ${breakpoints.tablet.small}) {
    justify-content: center;
    padding-top: 5vh;
    padding-bottom: 10vh;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    justify-content: center;
    padding-top: 10vh;
    padding-bottom: 20vh;
  }
`

const Contents = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.tablet.small}) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
    max-width: ${rhythm(40)};
  }
`

const Grid = styled.div`
  width: 100%;
  box-shadow: 0px 4px 8px ${colors.gray30};
  transition: opacity 0.25s ease;

  @media (min-width: ${breakpoints.tablet.medium}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    box-shadow: 0px 4px 8px ${colors.gray30};
    &.inactive {
      opacity: .4;
    }
  
    &.active {
      opacity: 1;
  }
`

const Service = styled.div`
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid ${colors.gray30};
  border-radius: 2px;
  opacity: 1;
  transition: opacity 0.5s ease;
  will-change: opacity;

  @media (min-width: ${breakpoints.tablet.small}) {
    padding: 1rem;
    opacity: 0;
    border-right: 1px solid ${colors.gray30};

    &.active {
      opacity: 1;
    }

    &.inactive {
      opacity: 0.2;
    }
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    margin-bottom: 0rem;
    padding: 3rem;
  }
`

const ServiceHeader = styled.h3`
  margin-bottom: 0.5rem;
  position: relative;

  &:after {
    content: " ";
    position: absolute;
    bottom: -0.4rem;
    left: 0rem;
    width: 10%;
    height: 1px;
    background-color: ${colors.gray30};
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    &:after {
      width: 100%;
    }
  }
`

const Description = styled.p`
  width: 90%;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin-bottom: 0rem;

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 100%;
    font-size: 1.2rem;
    line-height: 2.25rem;
  }
`

const LearnMoreDesktop = styled(Link)`
  font-size: 0.75rem;
  font-weight: 800;

  color: ${colors.gray60};
  font-family: "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.125rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    display: inline;
  }
`

const SectionHeader = styled.h2`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 1rem;
    text-align: center;
    transition: opacity 0.25s ease, transform 0.25s ease;

    &.active {
      transform: translateY(0rem);
      opacity: 1;
    }

    &.inactive {
      transform: translateY(4rem);
      opacity: 0;
    }
  }
`

export default WhatIDo
