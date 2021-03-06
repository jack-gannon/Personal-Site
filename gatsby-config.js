module.exports = {
  siteMetadata: {
    // edit below
    title: `Jack Gannon - Designer & Developer | UX Design • UI Design • Web Development`,
    author: `Jack Gannon`,
    description: `Jack Gannon is a Designer and Developer based out of Phoenix, Arizona. He specializes in User-Experience (UX) Design, User-Interface (UI) Design, and Web Development. His primary focus is on Front-End Development, working with HTML, CSS, JavaScript, and JavaScript frameworks such as React. This website shows his portfolio, blog, and more information.`,
    siteUrl: `https://jackgannon.io`,
    social: {
      twitter: `jackgannon_`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1248,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Sonoran",
              wrapperClassName: "code-container",
              extensions: ["sonoran"],
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-129113451-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jack Gannon - Designer & Developer`,
        short_name: `jackgannon.io`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/logo.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
