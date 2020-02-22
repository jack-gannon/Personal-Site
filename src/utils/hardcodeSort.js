// This function exists to hardcode sort the Projects Array
// due to an issue with the GraphQL Portfolio Query not
// executing as expected. Until that issue is resolved,
// this will have to suffice.

export const hardcodeSort = array => {
  const newArray = array.sort((a, b) =>
    a.node.childMdx.frontmatter.index > b.node.childMdx.frontmatter.index
      ? 1
      : a.node.childMdx.frontmatter.index === b.node.childMdx.frontmatter.index
      ? a.node.childMdx.frontmatter.title > b.node.childMdx.frontmatter.title
        ? 1
        : -1
      : -1
  )
  return newArray
}
