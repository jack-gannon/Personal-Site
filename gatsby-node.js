const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogCategory = path.resolve(`./src/templates/blog-category.js`)
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

    // Create blog posts pages.
    const posts = result.data.allMdx.edges
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
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

    // // Create blog posts pages.
    // const posts = result.data.allMdx.edges
    // posts.forEach((post, index) => {
    //   const previous = index === posts.length - 1 ? null : posts[index + 1].node
    //   const next = index === 0 ? null : posts[index - 1].node

    //   createPage({
    //     path: `blog${post.node.fields.slug}`,
    //     component: blogPost,
    //     context: {
    //       slug: post.node.fields.slug,
    //       previous,
    //       next,
    //     },
    //   })
    // })

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
