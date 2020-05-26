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
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
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
