module.exports = {
  siteMetadata: {
    title: 'Bertie Blackman',
    lang: 'en',
    titleTemplate: '%s · The Real Hero',
    description:
      'Hogwarts Potions master, Head of Slytherin house and former Death Eater.',
    url: 'https://www.doe.com', // No trailing slash allowed!
    image: '/images/snape.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@occlumency',
  },
  /* Your site config here */
  plugins: ['gatsby-plugin-typescript', 'gatsby-plugin-react-helmet'],
}
