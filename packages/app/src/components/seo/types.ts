export interface SEOProps {
  title?: string
  lang?: string
  description?: string
  image?: string
  article?: boolean
}

export interface SiteData {
  site: {
    siteMetadata: {
      defaultTitle: string
      defaultLang: string
      titleTemplate: string
      defaultDescription: string
      siteUrl: string
      defaultImage: string
      twitterUsername: string
    }
  }
}
