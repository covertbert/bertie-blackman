import React, { useRef } from 'react'

import Page from '../layouts/page'
import Section from '../layouts/section'

import Hero from '../components/hero'
import CTA from '../components/cta'
import HR from '../components/hr'

import { Form, FormRow, FormTextInput, FormTextAreaInput, FormSubmit } from '../components/form'

import { scrollToRef } from '../utils'

const HERO_TEXT = 'software engineer'
const HERO_BODY =
  "Hi, I'm Bertie and I'm a software engineer passionate about TypeScript, React & CI/CD. Currently I'm working at a company called cinch in Manchester where we're taking the faff out of buying and selling cars!"

const App = () => {
  const contactForm = useRef(null)
  const executeScroll = () => scrollToRef<HTMLDivElement>(contactForm)

  return (
    <Page title="home">
      <Hero heading={HERO_TEXT} body={HERO_BODY}>
        <CTA text="contact me" className="mt-8 ml-0" handleClick={executeScroll} />
      </Hero>

      <main>
        <Section title="About me">
          <div className="max-w-3xl">
            <p className="mb-6">
              I have 5 years&apos; professional experience in frontend software development where
              I&apos;ve worked in both agency and in-house environments. As a result of this I have
              gained a wealth of useful experience over the years!
            </p>

            <p>
              I&apos;m also a keen open source contributor so feel free to get in touch below if you
              have anything exciting that you&apos;d like to collaborate on!
            </p>
          </div>
        </Section>

        <HR />

        <Section background="white" title="Contact">
          <div className="invisible" ref={contactForm} />

          <Form>
            <FormRow>
              <FormTextInput required label="name" width="half" className="mb-4 md:mb-0" />
              <FormTextInput required label="email" width="half" />
            </FormRow>

            <FormRow>
              <FormTextAreaInput required label="message" />
            </FormRow>

            <FormSubmit text="Submit" />
          </Form>
        </Section>
      </main>
    </Page>
  )
}

export default App
