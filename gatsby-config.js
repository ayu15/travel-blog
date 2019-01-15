module.exports = {
  siteMetadata: {
    appbarHeader: 'Droplets of Dream',
    title: 'Droplets of Dream | Travel Blog | Ayush Sharma',
    description: 'This is my adventures blog.'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/theme/typography`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`
  ]
};
