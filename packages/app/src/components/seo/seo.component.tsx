import React from 'react'

import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

import { SiteData } from './types'

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultLang: lang
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`

export interface SEOProps {
  title?: string
  lang?: string
  description?: string
  image?: string
  article?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title,
  lang,
  description,
  image,
  article = false,
}) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery<SiteData>(query)

  const {
    defaultTitle,
    defaultLang,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    lang: lang || defaultLang,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: seo.lang }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
    </Helmet>
  )
}

export default SEO
