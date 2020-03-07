import React from "react"
import CategoryTabs from "../nav/CategoryTabs"
import { colors } from "../../utils/colors"

const AboutCategoryTabs = () => {
  const aboutCategories = [
    {
      name: "Personal",
      path: "/about/",
      color: colors.gray30,
    },
    {
      name: "Skills & Services",
      path: "/about/skills-services",
      color: colors.gray30,
    },
    {
      name: "CV/Resume",
      path: "/about/resume",
      color: colors.gray30,
    },
  ]
  return (
    <>
      <CategoryTabs categories={aboutCategories} />
    </>
  )
}

export default AboutCategoryTabs
