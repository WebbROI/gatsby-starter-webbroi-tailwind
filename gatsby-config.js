const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter for Webbroi`,
    titleTemplate: "%s · Gatsby Starter for Webbroi",
    siteUrl: `https://gatsby-starter.webbroi.dev`,
    image: `/og-image.png`,
    description: `Some description of this project.`,

    mainMenuLinks: [
      { id: '1', name: 'Home', link: '/' },
      { id: '2', name: 'Sample Page', link: '/sample-page' },
      { id: '3', name: 'About', link: '/about' },
    ],
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        // Change GTM id of this project
        id: "GTM-1234567",
      },
    },
  ],
}