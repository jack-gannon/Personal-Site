import React from "react"
import SkillsSection from "./SkillsSection"

const UXSkills = () => {
  const uxSkills = {
    sectionTitle: "UX Design",
    sectionDescription: "Designing for users blah blah blah",
    columns: [
      {
        colHeader: "User Research",
        colItems: [
          "Personas & User Stories",
          "User Journey Mapping",
          "Discovery Interviews",
        ],
      },
      {
        colHeader: "Information Architecture",
        colItems: ["Wireframing", "Sitemapping", "Relation Mapping"],
      },
      {
        colHeader: "User Testing",
        colItems: ["Usability Testing", "Heat Mapping", "Feedback Interviews"],
      },
    ],
  }
  return <SkillsSection skills={uxSkills} id="ux-skills" />
}

export default UXSkills
