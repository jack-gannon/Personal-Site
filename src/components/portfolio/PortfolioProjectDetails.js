import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/colors"

const PortfolioProjectDetails = ({ client, credits, tools }) => {
  return (
    <Details>
      <Field>
        <Label>Client:</Label>
        <ClientName>
          {client.client_name}
          {client.is_personal && <Personal> (Personal)</Personal>}
        </ClientName>
      </Field>
      <Field>
        <Label>Client:</Label>
        <ClientName>
          {client.client_name}
          {client.is_personal && <Personal> (Personal)</Personal>}
        </ClientName>
      </Field>
      {credits && (
        <Field>
          <Label>Credits:</Label>
          <ul>
            {credits.map(credit => (
              <li key={credit.name}>
                <CreditName>{credit.name}</CreditName>
                <CreditTitle>- {credit.title}</CreditTitle>
              </li>
            ))}
          </ul>
        </Field>
      )}
      {tools && (
        <Field>
          <Label>Tools:</Label>
          <ul>
            {tools.map(tool => (
              <Tool key={tool.name}>
                <ToolIcon src={tool.icon} />
                <ToolName>{tool.name}</ToolName>
              </Tool>
            ))}
          </ul>
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
  padding-bottom: 1rem;
`
const Field = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray20};
  margin-top: 0.5rem;

  & p {
    margin-bottom: 0.5rem;
  }
`

const Label = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray60};
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.125em;
  line-height: 2rem;
`

const ClientName = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray80};
  font-weight: 800;
  line-height: 2rem;
`

const CreditName = styled.span`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray80};
  font-weight: 800;
  line-height: 2rem;
`

const CreditTitle = styled.span`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray60};
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.05em;
`

const Personal = styled.span`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray60};
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.05em;
`
const Tool = styled.li``

const ToolIcon = styled.img`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray60};
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.05em;
`

const ToolName = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  color: ${colors.gray60};
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.05em;
`

export default PortfolioProjectDetails
