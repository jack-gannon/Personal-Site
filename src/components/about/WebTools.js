import React from "react"
import ToolsSection from "./ToolsSection"
import HTML5Logo from "../../../content/assets/logos/html5.svg"
import CSS3Logo from "../../../content/assets/logos/css3.svg"
import JSLogo from "../../../content/assets/logos/javascript.svg"
import ReactLogo from "../../../content/assets/logos/react.svg"
import NodeLogo from "../../../content/assets/logos/node.svg"
import ExpressLogo from "../../../content/assets/logos/express.svg"
import WebpackLogo from "../../../content/assets/logos/webpack.svg"
import GitLogo from "../../../content/assets/logos/git.svg"
import GatsbyLogo from "../../../content/assets/logos/gatsby.svg"
import GraphQLLogo from "../../../content/assets/logos/graphql.svg"
import ReduxLogo from "../../../content/assets/logos/redux.svg"
import MongoDBLogo from "../../../content/assets/logos/mongodb.svg"

const WebTools = () => {
  const webTools = [
    {
      name: "HTML5",
      description: "Markup language for defining and structuring web content",
      logo: HTML5Logo,
    },
    {
      name: "CSS3",
      description:
        "Language for defining presentation and styling of web content",
      logo: CSS3Logo,
    },
    {
      name: "JavaScript",
      description: "Scripting language to add interactivity to web content",
      logo: JSLogo,
    },
    {
      name: "React",
      description:
        "JavaScript library for building interfaces and single-page applications",
      logo: ReactLogo,
    },
    {
      name: "Redux",
      description: "JavaScript library for managing application-level state",
      logo: ReduxLogo,
    },
    {
      name: "webpack",
      description: "Module bundler for ES6 modules",
      logo: WebpackLogo,
    },
    {
      name: "Node.js",
      description: "JavaScript runtime environment outside of the browser",
      logo: NodeLogo,
    },
    {
      name: "Express.js",
      description: "Node.js framework for building APIs and web applications",
      logo: ExpressLogo,
    },

    {
      name: "MongoDB",
      description: "NoSQL schema & document oriented database solution",
      logo: MongoDBLogo,
    },
    {
      name: "Gatsby.js",
      description:
        "Static-Site Generator for programmatically creating websites",
      logo: GatsbyLogo,
    },
    {
      name: "GraphQL",
      description: "Language for querying and manipulating data from APIs",
      logo: GraphQLLogo,
    },
    {
      name: "Git",
      description: "Version control system for managing source code",
      logo: GitLogo,
    },
  ]
  return <ToolsSection title="Development Tools" tools={webTools} />
}

export default WebTools
