/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
  ],
  siteMetadata: {
    description: 'A portfolio',
    image: '/images/snape.jpg',
    lang: 'en',
    title: 'bertie blackman',
    titleTemplate: '%s · bertie blackman',
    url: 'https://bertie.dev',
  },
}
