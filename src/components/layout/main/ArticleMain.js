import React from "react"
import styled from "styled-components"
import { rhythm } from "../../../utils/typography"
import { breakpoints } from "../../../utils/breakpoints"

const ArticleMain = ({ children, asideComponents = [] }) => {
  // This component takes the children and renders them in the
  // main semantic html tag, similar to the other main layout,
  // except this one contains two props. Aside-Top and Aside Bottom.
  // Components passed in to those two props will be rendered in the
  // aside on larger viewports. On mobile, asideTop will be rendered
  // before the main content, and asideBottom will be rendered after.

  return (
    <Container>
      <Body>{children}</Body>
      <Aside>{asideComponents}</Aside>
    </Container>
  )
}

const Container = styled.div`


@media (min-width: ${breakpoints.tablet.medium}{
  display: grid;
  grid-template-columns: 67% 33%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};

  & main {
    font-size: 18px;
  }
}
  
`

const Body = styled.div`
  width: 100%;
`

const Aside = styled.aside``

export default ArticleMain
