import React from "react"
import CategoryTabs from "../nav/CategoryTabs"
import { colors } from "../../utils/colors"

const BlogCategoryTabs = () => {
  const blogCategories = [
    { name: "All Posts", path: "/blog/", color: colors.gray40 },
    {
      name: "Design",
      path: "/blog/category/design-posts/",
      color: colors.secondary,
    },
    {
      name: "Development",
      path: "/blog/category/development-posts/",
      color: colors.primary,
    },
    {
      name: "Personal",
      path: "/blog/category/personal-posts/",
      color: colors.tertiaryMedium,
    },
  ]
  return (
    <>
      <CategoryTabs categories={blogCategories} />
    </>
  )
}

export default BlogCategoryTabs
