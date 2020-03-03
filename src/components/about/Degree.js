import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import { colors } from "../../utils/colors"

const Degree = ({
  title,
  degreeType,
  schoolName,
  university,
  dateRange,
  description,
  areasOfStudy = [],
}) => {
  return (
    <Container className="degree">
      <MainPanel>
        <DegreeAndSchool>
          <DegreeType>{degreeType}</DegreeType>
          <DegreeName>{title}</DegreeName>
          <School>
            <SchoolName>{schoolName}</SchoolName>
            <University> - {university}</University>
          </School>
        </DegreeAndSchool>
        <DateRange>{dateRange}</DateRange>
      </MainPanel>
      <Description>{description}</Description>
      <AreasOfStudy>
        <ul>
          {areasOfStudy.map(area => (
            <li>{area}</li>
          ))}
        </ul>
      </AreasOfStudy>
    </Container>
  )
}

const Container = styled.div`
  font-family: "Helvetia Neue", sans-serif;
  margin-top: 6rem;
`

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;

  @media (min-width: ${breakpoints.desktop.small}) {
    flex-direction: row;
  }
`
const DegreeAndSchool = styled.div`
  line-height: 1.5rem;
`

const DegreeType = styled.p`
  margin-bottom: 0.25rem;
`

const DegreeName = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`

const School = styled.p`
  margin-bottom: 0.75rem;
`

const SchoolName = styled.span`
  font-weight: 600;
  color: ${colors.gray70};
`

const University = styled.span`
  color: ${colors.gray60};
`

const DateRange = styled.p`
  color: ${colors.gray60};
`

const Description = styled.p`
  line-height: 1.5rem;
  font-size: 0.875rem;

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 75%;
  }
`

const AreasOfStudy = styled.div`
  & p {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  & li {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`

export default Degree
