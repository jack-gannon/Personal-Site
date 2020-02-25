import React from "react"
import SkillsSection from "./SkillsSection"

const WebSkills = () => {
  const webSkills = {
    sectionTitle: "Web Development",
    sectionDescription: "Building websites and web applications blah blah blah",
    columns: [
      {
        colHeader: "Front-End Development",
        colItems: [
          "Client-Side Development",
          "Responsive Design",
          "Accessibility",
        ],
      },
      {
        colHeader: "Back-End Development",
        colItems: [
          "Server-Side Development",
          "API & Database Design",
          "Security & Authentication",
        ],
      },
      {
        colHeader: "Development Principals",
        colItems: [
          "Design Patterns",
          "Algorithms & Data Structures",
          "Agile Development",
        ],
      },
    ],
  }
  return <SkillsSection skills={webSkills} id="webdev" />
}

export default WebSkills
