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
  const data: PageQuery = useStaticQuery(graphql`
    query PageQuery {
      allContentfulNavigation(sort: { fields: order }) {
        totalCount
        nodes {
          order
          external
          to
          label
        }
      }
    }
  `)

  const navigationItems = data.allContentfulNavigation.nodes

  return (
    <>
      <SEO title={title} />

      <Header navigationItems={navigationItems} />

      {children}

      <Footer navigationItems={navigationItems} />
    </>
  )
}

export default Page
