import { graphql } from 'gatsby'

export const siteQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultLang: lang
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`
