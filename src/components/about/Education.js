import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import { colors } from "../../utils/colors"
import Degree from "./Degree"

const Education = () => {
  return (
    <Section>
      <TitleCell>
        <SectionTitle>Education</SectionTitle>
      </TitleCell>
      <Degrees>
        <Degree
          title="Graphic Information Technology"
          degreeType="Bachelor of Science (B.S.)"
          dateRange="Jan 2012 - Dec 2015"
          schoolName="Ira A. Fulton Schools of Engineering"
          university="Arizona State University"
          description="At Arizona State University, I studied Graphic Information Technology. My focus areas were concentrated in Web Development and Design. During my time as a student within the GIT program, I gained introductory to intermediate experience in the following areas of study:"
          areasOfStudy={[
            "Design Principals and Fundamentals",
            "Color Theory",
            "Graphic Design",
            "Adobe Creative Suite Software",
            "Front-End Web Languages (HTML, CSS, JavaScript)",
            "Search Engine Optimization (SEO) and Web Analytics",
            "Project Management",
            "Wireframe and Mockup Creation",
            "Technology Management Core Principals",
            "E-Commerce and Marketing Strategy",
          ]}
        />
      </Degrees>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 2rem;

  @media (min-width: ${breakpoints.desktop.small}) {
    display: grid;
    grid-template-columns: calc(25% - 0.5rem) calc(75% - 0.5rem);
    grid-gap: 1rem;
    padding-top: 1rem;
  }
`

const TitleCell = styled.div`
  width: 100%;
`

const SectionTitle = styled.h3`
  position: relative;
  font-size: 2rem;
  width: 75%;

  @media (min-width: ${breakpoints.tablet.small}) {
  }

  @media (min-width: ${breakpoints.desktop.small}) {
  }
`

const Degrees = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid ${colors.gray20};
  border-radius: 2px;
  box-shadow: ${colors.shadow1};
  padding: 1rem;
  margin-left: -1rem;

  &:before {
    content: " ";
    position: absolute;
    left: 1rem;
    width: 1px;
    height: calc(100% - 2.5rem);
    background-color: ${colors.gray30};
    opacity: 0.75;
  }

  & .degree:first-child {
    margin-top: 0rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    margin-left: 0rem;

    & .degree {
      margin-left: 2rem;
    }

    &:before {
      left: 1.5rem;
      top: 1.5rem;
    }
  }
`

export default Education
