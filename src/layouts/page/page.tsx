import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '@layouts/header'
import Footer from '@layouts/footer'

import SEO from '@components/seo'

import { PageQuery } from './types'

interface PageProps {
  title: string
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  const data = useStaticQuery<PageQuery>(graphql`
    query PageQuery {
      allContentfulNavigation(sort: { fields: order }) {
        totalCount
        nodes {
          external
          to
          label
        }
      }
    }
  `)

  const navigationItems = data.allContentfulNavigation

  return (
    <>
      <SEO title={title} />

      <Header
        navigationItems={navigationItems.nodes}
        navigationItemsTotal={navigationItems.totalCount}
      />

      {children}

      <Footer navigationItems={navigationItems.nodes} />
    </>
  )
}

export default Page
