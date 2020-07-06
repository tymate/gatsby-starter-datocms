require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `gatsby-starter-datocms`,
    description: `Bootstrap your JAMstack with datoCMS, Tymate devs’ favorite libraries, as well as a Netlify automation plugins.`,
    author: `@tymate`,
    siteUrl: 'https://tymate.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-datocms`,
        description: `Bootstrap your JAMstack with datoCMS, Tymate devs’ favorite libraries, as well as a Netlify automation plugins.`,
        short_name: `gsd`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#41d974`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.NODE_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {},
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-resolve-src`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.GATSBY_DATOCMS_API_TOKEN,
        apiUrl: 'https://site-api.datocms.com',
        previewMode: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GA,
      },
    },
  ],
};
