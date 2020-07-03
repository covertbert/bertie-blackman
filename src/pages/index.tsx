import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Document } from '@contentful/rich-text-types'
import { useForm } from 'react-hook-form'

import Page from '@layouts/page'
import Section from '@layouts/section'
import Hero from '@components/hero'
import CTA from '@components/cta'
import HR from '@components/hr'
import { Form, FormRow, FormTextInput, FormSubmit } from '@components/form'

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

type ContactFormInputs = {
  name: string
  email: string
  message: string
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

  const { register, handleSubmit } = useForm<ContactFormInputs>()
  const onSubmit = (data: ContactFormInputs) => {
    console.log(data)
  }

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

          <Form name="contact" onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
              <FormTextInput ref={register} label="name" width="half" className="mb-4 md:mb-0" />
              <FormTextInput ref={register} label="email" width="half" />
            </FormRow>

            <FormRow>{/* <FormTextAreaInput ref={register} label="message" /> */}</FormRow>

            <FormSubmit text="Submit" />
          </Form>
        </Section>
      </main>
    </Page>
  )
}

export default App
