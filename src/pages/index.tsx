/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'

import Header from '../layouts/header'
import Section from '../layouts/section'
import Footer from '../layouts/footer'

import SEO from '../components/seo'
import Hero from '../components/hero'
import CTA from '../components/cta'
import { Form } from '../components/form'

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
      <Section background="white">
        <Form>
          <input type="hidden" name="bot-field" />

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 invisible"
                htmlFor="name"
              >
                name
              </label>
              <input
                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="name"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 invisible"
                htmlFor="email"
              >
                email
              </label>
              <input
                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="email"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 invisible"
                htmlFor="message"
              >
                message
              </label>
              <textarea
                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="message"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Section>
    </main>

    <Footer />
  </>
)

export default App
