import React from 'react'

import Header from '../layouts/header'
import Section from '../layouts/section'
import Footer from '../layouts/footer'

import SEO from '../components/seo'
import Hero from '../components/hero'
import CTA from '../components/cta'

import { Form, FormRow, FormTextInput, FormTextAreaInput, FormSubmit } from '../components/form'

const HERO_TEXT = 'software engineer'
const HERO_BODY =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

const App = () => (
  <>
    <SEO title="home" />

    <Header />
    <Hero heading={HERO_TEXT} body={HERO_BODY}>
      <CTA text="contact me" className="mt-8 ml-0" />
    </Hero>

    <main>
      <Section background="secondary" title="Contact me">
        <Form>
          <FormRow>
            <FormTextInput label="name" width="half" />
            <FormTextInput label="email" width="half" />
          </FormRow>

          <FormRow>
            <FormTextAreaInput label="message" />
          </FormRow>

          <FormSubmit text="Submit" />
        </Form>
      </Section>
    </main>

    <Footer />
  </>
)

export default App
