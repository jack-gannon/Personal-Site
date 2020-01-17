const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogCategory = path.resolve(`./src/templates/blog-category.js`)
  const portfolioProject = path.resolve(`./src/templates/portfolio-project.js`)
  const portfolioCategory = path.resolve(
    `./src/templates/portfolio-category.js`
  )

  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                content_type
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create Blog Category Pages
    const blogCategories = [
      { name: "All", path: "/all-posts/" },
      { name: "Design", path: "/design-posts/" },
      { name: "Development", path: "/development-posts/" },
      { name: "Personal", path: "/personal-posts/" },
    ]

    blogCategories.forEach((category, index) => {
      createPage({
        path: `blog/category${category.path}`,
        component: blogCategory,
        context: {
          slug: category.path,
          category: category.name,
        },
      })
    })

    // Create Portfolio Category Pages
    const portfolioCategories = [
      { name: "All", path: "/portfolio/" },
      { name: "UX Design", path: "/ux-design-projects/" },
      { name: "UI Design", path: "/ui-design-projects/" },
      { name: "Web Development", path: "/web-dev-projects/" },
    ]

    portfolioCategories.forEach((category, index) => {
      createPage({
        path: `portfolio/category${category.path}`,
        component: portfolioCategory,
        context: {
          slug: category.path,
          category: category.name,
        },
      })
    })

    // Create blog posts pages.
    const allContent = result.data.allMdx.edges
    allContent.forEach((content, index) => {
      if (content.node.frontmatter.content_type === "blog") {
        const previous =
          index === allContent.length - 1 ? null : allContent[index + 1].node
        const next = index === 0 ? null : allContent[index - 1].node

        createPage({
          path: `blog${content.node.fields.slug}`,
          component: blogPost,
          context: {
            slug: content.node.fields.slug,
            previous,
            next,
          },
        })
      } else if (content.node.frontmatter.content_type === "portfolio") {
        createPage({
          path: `portfolio${content.node.fields.slug}`,
          component: portfolioProject,
          context: {
            slug: content.node.fields.slug,
          },
        })
      }
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
