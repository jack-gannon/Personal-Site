import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { rhythm } from "../../utils/typography"
import { breakpoints } from "../../utils/breakpoints"

const AuthorDetails = ({ author, date, avatar }) => {
  return (
    <Details>
      <Avatar fixed={avatar} />
      <div>
        <Author>
          By:
          <AuthorName>{author}</AuthorName>
        </Author>
        <Published>
          <Date>{date}</Date>
        </Published>
      </div>
    </Details>
  )
}

const Details = styled.div`
  display: flex;
`

const Avatar = styled(Image)`
  margin-right: 0.5rem;
  border-radius: 50%;
`

const Author = styled.p`
  margin-bottom: ${rhythm(0)};
  line-height: 1.5rem;
  font-size: 1rem;

  @media (min-width: ${breakpoints.tablet.medium}) {
    font-size: 1.25rem;
  }
`

const AuthorName = styled.span`
  font-weight: 800;

  color: ${colors.gray80};
  margin-left: 0.25rem;
`

const Published = styled.p`
  color: ${colors.gray60};
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin-bottom: ${rhythm(0)};

  @media (min-width: ${breakpoints.tablet.medium}) {
    font-size: 1rem;
  }
`

const Date = styled.span``

export default AuthorDetails
