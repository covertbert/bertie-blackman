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
  "Hi, I'm Bertie and I'm a software engineer passionate about TypeScript, React & CI/CD. Currently I'm working at a company called cinch in Manchester - taking the faff out of buying and selling cars!"

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
              I have 5 years professional experience in front-end development for both agency and
              in-house environments.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
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
