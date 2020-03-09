import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"

const Tags = ({ tags = [] }) => {
  return (
    <TagsCollection>
      {tags && tags.length > 1 ? (
        tags.map(tag => <Tag key={tag.name}>{tag.name}</Tag>)
      ) : (
        <p>No Tags</p>
      )}
    </TagsCollection>
  )
}

const TagsCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid ${colors.gray30};
  padding-top: 1rem;
`

const Tag = styled.p`
  display: inline-block;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 0.75rem;
  text-transform: capitalize;
  border: 1px solid ${colors.gray50};
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 2rem;
  padding: 0.125rem 0.75rem;

  @media (min-width: ${breakpoints.tablet.medium}) {
    padding: 0.25rem 1rem;
    font-size: 1rem;
    margin-right: 1rem;
  }
`

export default Tags
