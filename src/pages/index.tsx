import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Document } from '@contentful/rich-text-types'

import Page from '@layouts/page'
import Section from '@layouts/section'
import Hero from '@components/hero'
import CTA from '@components/cta'
import HR from '@components/hr'
import ContactForm from '@containers/contact-form'

import { scrollToRef, convertRichText } from '@utils'

interface IndexQuery {
  contentfulHero: {
    heading: string
    body: {
      json: Document
    }
  }

  contentfulSection: {
    heading: string
    body: {
      json: Document
    }
  }
}

const App = () => {
  const contactForm = useRef(null)
  const executeScroll = () => scrollToRef<HTMLDivElement>(contactForm)

  const {
    contentfulHero: { heading: heroHeading, body: heroBody },
    contentfulSection: { heading: sectionHeading, body: sectionBody },
  } = useStaticQuery<IndexQuery>(graphql`
    query IndexQuery {
      contentfulHero(slug: { eq: "software-engineer" }) {
        heading
        body {
          json
        }
      }
      contentfulSection(slug: { eq: "about-me" }) {
        heading
        body {
          json
        }
      }
    }
  `)

  return (
    <Page title="home">
      <Hero heading={heroHeading} body={heroBody.json}>
        <CTA text="contact me" className="mt-8" handleClick={executeScroll} />
      </Hero>

      <main>
        <Section title={sectionHeading}>
          <div className="max-w-4xl">{convertRichText(sectionBody.json)}</div>
        </Section>

        <HR />

        <Section background="white" title="Contact">
          <div className="invisible" ref={contactForm} />

          <ContactForm />
        </Section>
      </main>
    </Page>
  )
}

export default App
