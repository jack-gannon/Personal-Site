import React from "react"
import ToolsSection from "./ToolsSection"
import SketchLogo from "../../../content/assets/logos/sketch.svg"
import FigmaLogo from "../../../content/assets/logos/figma.svg"
import ZeplinLogo from "../../../content/assets/logos/zeplin.svg"
import PrincipleLogo from "../../../content/assets/logos/principle.svg"
import AdobeCCLogo from "../../../content/assets/logos/adobecc.svg"
import HotjarLogo from "../../../content/assets/logos/hotjar.svg"
import GoogleAnalyticsLogo from "../../../content/assets/logos/googleanalytics.svg"

const DesignTools = () => {
  const designTools = [
    {
      name: "Sketch",
      description:
        "Design tool for creating wireframes, mockups, and other design assets",
      logo: SketchLogo,
    },
    {
      name: "Figma",
      description:
        "Design tool for creating assets, interactive prototypes, and collaboration",
      logo: FigmaLogo,
    },
    {
      name: "Zeplin",
      description:
        "Sketch plugin that helps provide a smooth transition from design to development",
      logo: ZeplinLogo,
    },
    {
      name: "Principle",
      description:
        "Animation and interaction design software for prototyping designs",
      logo: PrincipleLogo,
    },
    {
      name: "Adobe Creative Cloud",
      description:
        "The famous line of Adobe products that features Illustrator, Photoshop, and more",
      logo: AdobeCCLogo,
    },
    {
      name: "Hotjar",
      description:
        "User behavior tracking software used for heatmaps, session recordings, and more",
      logo: HotjarLogo,
    },
    {
      name: "Google Analytics",
      description:
        "Web analytics service by Google that tracks and reports web traffic",
      logo: GoogleAnalyticsLogo,
    },
  ]
  return <ToolsSection title="Design Tools" tools={designTools} />
}

export default DesignTools
