import React from "react"
import SkillsSection from "./SkillsSection"

const UISkills = () => {
  const uiSkills = {
    sectionTitle: "UI Design",
    sectionDescription: "Designing for interfaces blah blah blah",
    columns: [
      {
        colHeader: "Visual Design",
        colItems: ["Color Theory", "Typography", "Layout"],
      },
      {
        colHeader: "Artifacts",
        colItems: ["Interactive Prototyping", "Static Mockups"],
      },
      {
        colHeader: "Design Systems",
        colItems: ["Documentation", "Asset Management", "Taxonimization"],
      },
    ],
  }
  return <SkillsSection skills={uiSkills} id="ui" />
}

export default UISkills
