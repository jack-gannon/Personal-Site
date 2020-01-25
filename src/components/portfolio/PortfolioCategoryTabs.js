import React from "react"
import CategoryTabs from "../nav/CategoryTabs"
import { colors } from "../../utils/colors"

const PortfolioCategoryTabs = () => {
  // Create Portfolio Category Pages
  const portfolioCategories = [
    { name: "All Projects", path: "/portfolio/", color: colors.gray40 },
    {
      name: "UX Design",
      path: "/portfolio/category/ux-design-projects/",
      color: colors.primary,
    },
    {
      name: "UI Design",
      path: "/portfolio/category/ui-design-projects/",
      color: colors.secondary,
    },
    {
      name: "Web Dev",
      path: "/portfolio/category/web-dev-projects/",
      color: colors.tertiaryMedium,
    },
  ]
  return (
    <>
      <CategoryTabs categories={portfolioCategories} />
    </>
  )
}

export default PortfolioCategoryTabs
