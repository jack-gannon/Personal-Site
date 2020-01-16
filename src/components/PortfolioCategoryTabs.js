import React from "react"
import CategoryTabs from "./CategoryTabs"
import { colors } from "../utils/colors"

const PortfolioCategoryTabs = () => {
  // Create Portfolio Category Pages
  const portfolioCategories = [
    { name: "All", path: "/work/", color: colors.gray40 },
    {
      name: "UX Design",
      path: "/work/category/ux-design-projects/",
      color: colors.primary,
    },
    {
      name: "UI Design",
      path: "/work/category/ui-design-projects/",
      color: colors.secondary,
    },
    {
      name: "Web Development",
      path: "/work/category/web-dev-projects/",
      color: colors.tertiaryLight,
    },
  ]
  return (
    <>
      <CategoryTabs categories={portfolioCategories} />
    </>
  )
}

export default PortfolioCategoryTabs
