/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'bertie blackman',
    lang: 'en',
    titleTemplate: '%s · bertie blackman',
    description: 'A portfolio',
    url: 'https://bertie.dev',
    image: '/images/snape.jpg',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@typings': path.resolve(__dirname, 'src/types'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: [/icons/, /logos/],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
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
    },
  ],
}
