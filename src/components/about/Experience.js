import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import { colors } from "../../utils/colors"
import Position from "./Position"

const Experience = () => {
  return (
    <Section>
      <TitleCell>
        <SectionTitle>Experience</SectionTitle>
      </TitleCell>
      <Positions>
        <Position
          title="Freelance Designer"
          dateRange="Aug 2018 - Current"
          companyName="Jack Gannon LLC"
          companyLocation="Remote"
          responsibilities={[
            "Work with organizations to help develop new digital products or enhance existing digital products.",
            "Utilize design software such as Sketch and Figma to develop user interfaces and prototypes.",
            "Provide user experience design deliverables, such as wireframes, user journeys, and sitemaps.",
            "Plan and complete multiple independent open-source projects to grow my skills as a designer and developer.",
          ]}
        />
        <Position
          title="Creative Manager"
          dateRange="Mar 2018 - Aug 2018"
          companyName="On Q Financial"
          companyLocation="Tempe, AZ"
          responsibilities={[
            "Provided leadership and technical guidance for in-house creative team.",
            "Collaborated with third-party developers and design professionals to launch our comapny’s new website.",
            "Was Product Manager and UX lead for an internal marketing software project.",
            "Created wireframes, documentation, prototypes, and other design deliverables for digital production.",
          ]}
        />
        <Position
          title="Multimedia Designer"
          dateRange="Mar 2017 - Mar 2018"
          companyName="On Q Financial"
          companyLocation="Scottsdale, AZ"
          responsibilities={[
            "Oversaw the completion of our design process overhaul by creating a new design system.",
            "Delegated tasks of design-team personnel according to time-sensitivity and prioritization of projects.",
            "Participated in talent-acquisition efforts to expand the capabilities of our already talented team.",
            "Advised senior members of the organization in regards to design assets, visual identity and branding.",
            "Worked in a fast-paced, production-based environment to create high-quality design assets.",
          ]}
        />
        <Position
          title="Graphic Designer"
          dateRange="Apr 2016 - Mar 2017"
          companyName="On Q Financial"
          companyLocation="Scottsdale, AZ"
          responsibilities={[
            "Produced original design assets for both digital and print formats.",
            "Tracked the progress of design project completion from initial concept phase to delivery.",
            "Communicated with members of the marketing department to ensure our team's overall success.",
            "Developed ideas and concepts into tangible visual and technical solutions to present and future problems.",
          ]}
        />
      </Positions>
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
  font-size: 1.75rem;
  width: 75%;

  @media (min-width: ${breakpoints.tablet.small}) {
    font-size: 2rem;
    &:after {
      width: 10%;
    }

    @media (min-width: ${breakpoints.desktop.small}) {
      &:after {
        width: 20%;
      }
    }
  }
`

const Positions = styled.div`
  border-left: 1px solid ${colors.gray30};
  padding-left: 1rem;
  & .position:first-child {
    margin-top: 0rem;
  }
  @media (min-width: ${breakpoints.desktop.small}) {
    border-left: 1px solid ${colors.gray30};

    & .position {
      margin-left: 1rem;
    }
  }
`

export default Experience
