import React from "react"
import CategoryTabs from "../nav/CategoryTabs"
import { colors } from "../../utils/colors"

const AboutCategoryTabs = () => {
  const aboutCategories = [
    {
      name: "Personal",
      path: "/about/",
      color: colors.primary,
    },
    {
      name: "Skills & Services",
      path: "/about/skills-services",
      color: colors.secondary,
    },
    {
      name: "Contact",
      path: "/about/contact",
      color: colors.tertiaryMedium,
    },
  ]
  return (
    <>
      <CategoryTabs categories={aboutCategories} />
    </>
  )
}

export default AboutCategoryTabs
