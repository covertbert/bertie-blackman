module.exports = {
  siteMetadata: {
    title: 'Bertie Blackman',
    lang: 'en',
    titleTemplate: '%s · The Real Hero',
    description: 'A portfolio',
    url: 'https://bertie.dev', // No trailing slash allowed!
    image: '/images/snape.jpg', // Path to your image you placed in the 'static' folder
  },
  /* Your site config here */
  plugins: ['gatsby-plugin-typescript', 'gatsby-plugin-react-helmet'],
}
