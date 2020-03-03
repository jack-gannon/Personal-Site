import React from "react"
import styled from "styled-components"
import Resume from "../../../static/assets/JackGannon_Resume_2020.pdf"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"

const DownloadResume = () => {
  return (
    <Container>
      <Button href={Resume} download="JackGannon_Resume_2020">
        Download Resume
      </Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin-top: -1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${colors.gray20};
  padding-bottom: 1rem;

  @media (min-width: ${breakpoints.desktop.small}) {
    justify-content: flex-end;
  }
`

const Button = styled.a`
  display: block;
  border: 1px solid ${colors.gray40};
  height: 3rem;
  line-height: 1rem;
  padding: 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray70};
  text-decoration: none;
  background-color: #fff;

  & :hover {
    box-shadow: 0px 2px 4px ${colors.gray40};
  }
`

export default DownloadResume
