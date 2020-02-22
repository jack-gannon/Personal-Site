import React from "react"
import BlogEmptyState from "../../../../content/assets/empty_state/EmptyState-Blog.svg"
import styled from "styled-components"
import { colors } from "../../../utils/colors"
import { breakpoints } from "../../../utils/breakpoints"

const EmptyState = ({ type, mainText, bodyText }) => {
  return (
    <Container>
      {type === "blog" ? (
        <Graphic
          src={BlogEmptyState}
          alt="gray vector rectangle with Jack Gannon logo with various surrounding shapes"
        />
      ) : null}
      <MainText>{mainText}</MainText>
      <BodyText>{bodyText}</BodyText>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const Graphic = styled.img`
  width: 50%;
  opacity: 0.5;
  margin-bottom: 0.5rem;

  @media (min-width: ${breakpoints.tablet.medium}) {
    width: 30%;
  }
`

const MainText = styled.h2`
  color: ${colors.gray60};
  margin-bottom: 0.5rem;
`

const BodyText = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray50};
  font-size: 1.125rem;
`

export default EmptyState
