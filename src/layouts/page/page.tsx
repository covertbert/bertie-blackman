import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Header from '../header'
import Footer from '../footer'

import SEO from '../../components/seo'

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

  const { nodes } = data.allContentfulNavigation

  return (
    <>
      <SEO title={title} />

      <Header navigationItems={nodes} />

      {children}

      <Footer navigationItems={nodes} />
    </>
  )
}

export default Page
