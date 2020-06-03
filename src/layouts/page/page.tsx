import React from 'react'

import Header from '../header'
import Footer from '../footer'

import SEO from '../../components/seo'

interface PageProps {
  title: string
}

const Page: React.FC<PageProps> = ({ children, title }) => (
  <>
    <SEO title={title} />

    <Header />

    {children}

    <Footer />
  </>
)

export default Page
