import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"
import { colors } from "../../utils/colors"

const Position = ({
  title,
  companyName,
  companyLocation,
  dateRange,
  responsibilities = [],
}) => {
  return (
    <Container className="position">
      <TitlePanel>
        <TitleAndCompany>
          <Title>{title}</Title>
          <Company>
            <CompanyName>{companyName}</CompanyName>
            <CompanyLocation> - {companyLocation}</CompanyLocation>
          </Company>
        </TitleAndCompany>
        <DateRange>{dateRange}</DateRange>
      </TitlePanel>
      <Responsibilities>
        <p>As a {title}, I:</p>
        <ul>
          {responsibilities.map(responsibility => (
            <li>{responsibility}</li>
          ))}
        </ul>
      </Responsibilities>
    </Container>
  )
}

const Container = styled.div`
  font-family: "Helvetia Neue", sans-serif;
  margin-top: 4rem;
  margin-left: 1rem;

  @media (min-width: ${breakpoints.tablet.medium}) {
    margin-top: 6rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    margin-left: 0rem;
  }
`

const TitlePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet.medium}) {
    flex-direction: row;
  }
`
const TitleAndCompany = styled.div`
  margin-bottom: 0rem;
`

const Title = styled.h4`
  position: relative;
  font-size: 1.125rem;
  margin-bottom: 0rem;

  &:before {
    content: " ";
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    top: 0.025rem;
    left: -1.575rem;
    border: 6px solid #fff;
    border-radius: 50%;
    background-color: ${colors.gray50};
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;

    &:before {
      left: -33px;
      top: 0.04rem;
    }
  }
`

const Company = styled.p`
  margin-bottom: 0rem;

  @media (min-width: ${breakpoints.tablet.medium}) {
    margin-bottom: 0.75rem;
  }
`

const CompanyName = styled.span`
  font-weight: 600;
  color: ${colors.gray70};
`

const CompanyLocation = styled.span`
  color: ${colors.gray60};
`

const DateRange = styled.p`
  color: ${colors.gray60};
  line-height: 1rem;
`

const Responsibilities = styled.div`
  & p {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  & ul {
    margin-left: 1rem;
  }

  & li {
    margin-bottom: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${colors.gray70};
  }

  @media (min-width: ${breakpoints.tablet.medium}) {
    & li {
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`

export default Position
