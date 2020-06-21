/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@typings': path.resolve(__dirname, 'src/types'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
      resolve: 'gatsby-plugin-alias-imports',
    },
    {
      options: {
        background_color: '#6b37bf',
        display: 'standalone',
        icon: 'src/assets/app-icon.png', // This path is relative to the root of the site.
        name: 'bertie.dev',
        short_name: 'bertie.dev',
        start_url: '/',
        theme_color: '#4BC0D9',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-offline',
    {
      options: {
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
      },
      resolve: 'gatsby-source-contentful',
    },
    {
      options: {
        develop: false,
        printRejected: false,
        tailwind: true,
      },
      resolve: 'gatsby-plugin-purgecss',
    },
    {
      options: {
        rule: {
          include: [/icons/, /logos/],
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        fonts: [
          {
            family: 'Bebas Neue',
          },
          {
            family: 'Roboto',
          },
        ],
      },
      resolve: 'gatsby-plugin-prefetch-google-fonts',
    },
    {
      options: {
        head: false,
        trackingId: `${process.env.ANALYTICS_TRACKING_ID}`,
      },
      resolve: `gatsby-plugin-google-analytics`,
    },
    {
      options: {
        headers: {
          '/*': ['X-Frame-Options: DENY'],
        },
      },
      resolve: 'gatsby-plugin-netlify-headers',
    },
  ],
  siteMetadata: {
    description: 'A portfolio',
    image: '/icons/icon-512x512.png',
    lang: 'en',
    title: 'bertie blackman',
    titleTemplate: '%s · bertie blackman',
    url: 'https://bertie.dev',
  },
}
