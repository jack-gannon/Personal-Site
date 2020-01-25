import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"

class FeaturedProject extends React.Component {
  render() {
    return (
      <Project>
        <img src="./GatsbyScene.svg" alt="Gatsby Scene" />
      </Project>
    )
  }
}

const Project = styled.div`
  width: calc(100% - 2rem);
  margin-left: 1rem;
  background-color: ${colors.gray40};
  margin-bottom: 2rem;
  margin-top: 4rem;

  @media (min-width: ${breakpoints.tablet.medium}) {
    flex-direction: column;
    width: 100%;
    margin: 0rem;
  }
`

export default FeaturedProject
