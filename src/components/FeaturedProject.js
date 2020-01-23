import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"
import { breakpoints } from "../utils/breakpoints"

class FeaturedProject extends React.Component {
  render() {
    return (
      <Project>
        <Top>
          <img src="./GatsbyScene.svg" alt="Gatsby Scene" />
        </Top>
        <Details>
          <h3>Project Title</h3>
        </Details>
      </Project>
    )
  }
}

const Project = styled.div`
  display: flex;
  width: calc(100vw - 3rem);
  margin-left: 2rem;
  margin-right: 1rem;
  background-color: ${colors.gray20};

  flex-direction: column;
  margin-bottom: 4rem;

  @media (min-width: ${breakpoints.tablet.medium}) {
    flex-direction: column;
    width: 100%;
    margin-left: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;
  }
`

const Top = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid purple;
  background-color: ${colors.gray40};

  & img {
    border: 1px solid purple;
    width: 100%;
    margin-bottom: 0rem;
  }

  @media (min-width: ${breakpoints.tablet.medium}) {
    flex-direction: column;
    width: 100%;
  }
`

const Details = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${colors.gray40};
  background-color: ${colors.gray10};

  & h3 {
    margin-bottom: 0rem;
  }
`

export default FeaturedProject
