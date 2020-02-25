import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"

const SkillsSection = ({ skills, id }) => {
  // This component takes in a single skills object. The object
  // will have a sectionTitle key, with a string value, as well
  // as a sectionDescription key with a string value.
  const { sectionTitle, columns } = skills

  // The skills object also contains a columns key, which takes in
  // an array of objects. Each of these objects must have a "colHeader"
  // key, which is a string, and a "colItems" key which takes in an
  // array of strings.

  return (
    <Section id={id}>
      <TitleCell>
        <SectionTitle>{sectionTitle}</SectionTitle>
      </TitleCell>

      <Columns>
        {columns.map(column => (
          <Column>
            <ColumnHeader>{column.colHeader}</ColumnHeader>
            <ColumnItems>
              {column.colItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ColumnItems>
          </Column>
        ))}
      </Columns>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 2rem;
  @media (min-width: ${breakpoints.desktop.small}) {
    display: grid;
    grid-template-columns: calc(25% - 0.5rem) calc(75% - 0.5rem);
    grid-gap: 1rem;
    padding-top: 4rem;
  }
`

const TitleCell = styled.div`
  width: 100%;
`

const SectionTitle = styled.h2`
  position: relative;
  font-size: 2rem;
  width: 75%;

  @media (min-width: ${breakpoints.tablet.small}) {
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

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${colors.gray20};

  @media (min-width: ${breakpoints.tablet.small}) {
    flex-direction: row;
  }
`

const Column = styled.div`
  flex-basis: 33.3%;

  border-bottom: 1px solid ${colors.gray20};
  padding: 1rem;
  font-family: "Helvetica Neue", sans-serif;

  &:last-child {
    border-right: none;
  }

  & li {
    font-size: 0.875rem;
    color: ${colors.gray60};
  }

  @media (min-width: ${breakpoints.tablet.small}) {
    border-bottom: none;
    padding: 0.5rem;
    border-right: 1px solid ${colors.gray20};
  }
`
const ColumnHeader = styled.h4`
  padding: 0rem;
  @media (min-width: ${breakpoints.tablet.small}) {
    padding: 0.5rem;
  }
`

const ColumnItems = styled.ul``

export default SkillsSection
