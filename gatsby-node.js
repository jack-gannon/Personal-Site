const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const blogCategoryTemplate = path.resolve(`./src/templates/blog-category.js`)
  const portfolioProjectTemplate = path.resolve(
    `./src/templates/portfolio-project.js`
  )
  const portfolioCategoryTemplate = path.resolve(
    `./src/templates/portfolio-category.js`
  )

  return graphql(
    `
      {
        blogPosts: allFile(
          filter: {
            sourceInstanceName: { eq: "blog" }
            internal: { mediaType: { regex: "/text/" } }
          }
        ) {
          edges {
            node {
              childMdx {
                frontmatter {
                  title
                  category
                }
                fields {
                  slug
                }
              }
            }
          }
        }
        portfolioProjects: allFile(
          filter: {
            sourceInstanceName: { eq: "portfolio" }
            internal: { mediaType: { regex: "/text/" } }
          }
        ) {
          edges {
            node {
              childMdx {
                frontmatter {
                  title
                }
                fields {
                  slug
                }
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
        component: blogCategoryTemplate,
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
        component: portfolioCategoryTemplate,
        context: {
          slug: category.path,
          category: category.name,
        },
      })
    })

    // Create Blog Post Pages
    const blogPosts = result.data.blogPosts.edges
    blogPosts.forEach((post, index) => {
      const previous =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
      const next = index === 0 ? null : blogPosts[index - 1].node

      createPage({
        path: `blog${post.node.childMdx.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post.node.childMdx.fields.slug,
          category: post.node.childMdx.frontmatter.category,
          previous,
          next,
        },
      })
    })

    // Create Portfolio Project Pages
    const portfolioProjects = result.data.portfolioProjects.edges
    portfolioProjects.forEach(project => {
      createPage({
        path: `portfolio${project.node.childMdx.fields.slug}`,
        component: portfolioProjectTemplate,
        context: {
          slug: project.node.childMdx.fields.slug,
        },
      })
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
