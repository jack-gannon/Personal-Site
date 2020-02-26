import React from "react"
import styled, { keyframes } from "styled-components"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"
import Spinner from "../vectors/Spinner"
import Checkmark from "../vectors/Checkmark"
import Error from "../vectors/Error"

const FormStatusDisplay = ({ statusType }) => {
  return (
    <StatusDisplay>
      {statusType === "success" ? (
        <SuccessStatus />
      ) : statusType === "error" ? (
        <ErrorStatus />
      ) : (
        <LoadingStatus />
      )}
    </StatusDisplay>
  )
}

const SuccessStatus = () => (
  <>
    <VectorSlot>
      <Checkmark />
    </VectorSlot>
    <SuccessText>
      <p>Submitted</p>
    </SuccessText>
  </>
)

const ErrorStatus = () => (
  <>
    <VectorSlot>
      <Error />
    </VectorSlot>
    <ErrorText>
      <p>Error</p>
      <p>Please Try Again Later</p>
    </ErrorText>
  </>
)

const LoadingStatus = () => <Spinner />

const slideIn = keyframes`
from {
  transform: translateX(3rem);
  opacity: 0;
} to {
  transform: translateX(0rem);
  opacity: 1;
}
`

const StatusDisplay = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;
  border: 1px solid ${colors.gray20};
  border-radius: 2px;

  & svg {
    position: absolute;
    left: calc(50% - 1rem);
    right: calc(50% - 1rem);
    top: calc(50% - 1rem);
    bottom: calc(50% - 1rem);
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 12rem;
    float: right;
  }
`

const VectorSlot = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 0.75rem;
  left: 0.75rem;

  & svg {
    position: relative;
    top: 0rem;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
    width: 100%;
    height: 100%;
  }
`

const SuccessText = styled.div`
  text-align: center;
  margin-bottom: 0rem;
  animation: ${slideIn} 0.25s ease;

  & p {
    margin-bottom: 0rem;
    line-height: 1rem;
    margin-top: 1rem;
  }
`

const ErrorText = styled.div`
  text-align: left;
  margin-top: 0.5rem;
  margin-left: 3rem;
  animation: ${slideIn} 0.25s ease;

  & p {
    margin-bottom: 0rem;
    line-height: 1rem;

    &:first-child {
      color: red;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.05rem;
    }

    &:last-child {
      font-size: 0.75rem;
      letter-spacing: 0.025rem;
      color: ${colors.gay80};
    }
  }
`

export default FormStatusDisplay
