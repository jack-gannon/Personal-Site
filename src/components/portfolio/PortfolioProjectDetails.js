import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import Image from "gatsby-image"

const PortfolioProjectDetails = ({ client, credits, tools, role }) => {
  return (
    <Details>
      <h2>Project Details</h2>
      <Field>
        <Label>Client:</Label>
        <ClientName>
          {client.client_name}
          {client.is_personal && <Personal> (Personal)</Personal>}
        </ClientName>
      </Field>
      <Field>
        <Label>Role:</Label>
        <Role>{role}</Role>
      </Field>
      {credits && (
        <Field>
          <Label>Credits:</Label>
          <Credits>
            {credits.map(credit => (
              <Credit key={credit.name}>
                <CreditName>{credit.name}</CreditName>
                <CreditTitle> - {credit.role}</CreditTitle>
              </Credit>
            ))}
          </Credits>
        </Field>
      )}
      {tools && (
        <Field>
          <Label>Tools:</Label>
          <Tools>
            {tools.map(tool => (
              <Tool key={tool.name}>
                <Tooltip>{tool.name}</Tooltip>
                <ToolIcon src={tool.tool_logo.publicURL} />
              </Tool>
            ))}
          </Tools>
        </Field>
      )}
    </Details>
  )
}

const Details = styled.section`
  grid-area: details;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 2rem;
`
const Field = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray20};
  align-items: baseline;

  &:last-child {
    align-items: center;
  }

  & p {
    margin-bottom: 0rem;
  }
`

const Label = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray80};
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.125em;
`

const ClientName = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray70};
  font-weight: 400;
  padding-bottom: 0.125rem;
  letter-spacing: 0.025em;
`

const Role = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray70};
  font-weight: 400;
  padding-bottom: 0.125rem;
  letter-spacing: 0.025em;
`

const Credits = styled.ul`
  list-style: none;
  margin-top: 0.125rem;
  margin-bottom: 0rem;
`

const Credit = styled.li`
  margin-bottom: 0rem;
  text-align: right;
  letter-spacing: 0.025em;
`

const CreditName = styled.span`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray70};
  font-weight: 400;
`

const CreditTitle = styled.span`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray60};
  font-weight: 300;
  letter-spacing: 0.05em;
`

const Personal = styled.span`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray60};
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.05em;
`
const Tools = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
`

const Tool = styled.li`
  display: block;
  box-sizing: border-box;
  height: 2rem;
  position: relative;
  margin-bottom: 0rem;
  margin-left: 1rem;

  &:hover p {
    visibility: visible;
    opacity: 1;
    transform: translateY(-0.5rem);
  }

  &:hover img {
    opacity: 0.6;
  }
`

const Tooltip = styled.p`
  position: absolute;
  opacity: 0;
  z-index: 1;
  visibility: hidden;
  text-align: center;
  width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  transform: translateY(0rem);
  transition: opacity 0.25s ease, transform 0.25s ease;
  background-color: ${colors.gray70};
  border-radius: 4px;
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray20};

  &:after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${colors.gray70} transparent transparent transparent;
  }
`

const ToolIcon = styled.img`
  width: auto;
  height: 2rem;
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray60};
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.05em;
  margin-bottom: 0rem;
  padding-bottom: 0rem;
`

const ToolName = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray60};
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.05em;
`

export default PortfolioProjectDetails
