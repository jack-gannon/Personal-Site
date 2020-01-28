import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"

const SkillsSection = ({ skills, id }) => {
  // This component takes in a single skills object. The object
  // will have a sectionTitle key, with a string value, as well
  // as a sectionDescription key with a string value.
  const { sectionTitle, sectionDescription, columns } = skills

  // The skills object also contains a columns key, which takes in
  // an array of objects. Each of these objects must have a "colHeader"
  // key, which is a string, and a "colItems" key which takes in an
  // array of strings.

  return (
    <Section id={id}>
      <SectionTitle>{sectionTitle}</SectionTitle>
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
  display: grid;
  grid-template-columns: calc(25% - 0.5rem) calc(75% - 0.5rem);
  grid-gap: 1rem;
  padding-top: 4rem;
  margin-bottom: 1rem;
`
const SectionTitle = styled.h2`
  position: relative;
  font-size: 2rem;
  width: 75%;

  &:after {
    position: absolute;
    content: " ";
    width: 20%;
    height: 2px;
    bottom: 7.75rem;
    left: 0rem;
    background-color: ${colors.gray30};
  }
`

const Columns = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${colors.gray20};
`

const Column = styled.div`
  flex-basis: 33.3%;

  border-right: 1px solid ${colors.gray20};
  padding: 1rem;
  font-family: "Helvetica Neue", sans-serif;

  &:last-child {
    border-right: none;
  }

  & li {
    font-size: 0.875rem;
    color: ${colors.gray60};
  }
`
const ColumnHeader = styled.h4``

const ColumnItems = styled.ul``

export default SkillsSection
