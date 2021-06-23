import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Document } from '@contentful/rich-text-types'

import Page from '@layouts/page'
import Section from '@layouts/section'
import Hero from '@components/hero'
import CTA from '@components/cta'
import HR from '@components/hr'
import WorkItem from '@components/work-item'
import { WorkItem as WorkItemType } from '@typings'

import { convertRichText } from '@utils'

interface IndexQuery {
  contentfulHero: {
    heading: string
    body: {
      json: Document
    }
  }

  allContentfulWork: {
    totalCount: number
    nodes: WorkItemType[]
  }

  aboutSection: {
    heading: string
    body: {
      json: Document
    }
  }

  workSection: {
    heading: string
    body: {
      json: Document
    }
  }
}

const getWorkItemsFromQuery = ({
  allContentfulWork: { nodes },
}: Pick<IndexQuery, 'allContentfulWork'>) =>
  nodes.map(({ employerName, logo, dateFrom, dateTo, description }) => ({
    dates: { from: dateFrom, to: dateTo },
    description: description.json,
    employerName,
    logo: { alt: logo.title, url: logo.file.url },
  }))

const App = () => {
  const contactForm = useRef(null)

  const {
    contentfulHero: { heading: heroHeading, body: heroBody },
    aboutSection: { heading: aboutHeading, body: aboutBody },
    workSection: { heading: workHeading, body: workBody },
    allContentfulWork,
  } = useStaticQuery<IndexQuery>(graphql`
    query IndexQuery {
      contentfulHero(slug: { eq: "software-engineer" }) {
        heading
        body {
          json
        }
      }
      allContentfulWork(sort: { fields: dateTo, order: DESC }) {
        totalCount
        nodes {
          employerName
          dateFrom(formatString: "MMMM YYYY")
          dateTo(formatString: "MMMM YYYY")
          description {
            json
          }
          logo {
            file {
              url
            }
            title
          }
        }
        totalCount
      }
      aboutSection: contentfulSection(slug: { eq: "about-me" }) {
        heading
        body {
          json
        }
      }
      workSection: contentfulSection(slug: { eq: "index-work" }) {
        heading
        body {
          json
        }
      }
    }
  `)

  const employerData = getWorkItemsFromQuery({
    allContentfulWork,
  })

  return (
    <Page title="home">
      <Hero heading={'WOOOOOO'} body={heroBody.json}>
        <CTA
          text="contact me"
          className="mt-8"
          handleClick={() => {
            window.location.href = `mailto:me@bertie.dev`
          }}
        />
      </Hero>

      <main>
        <Section title={aboutHeading}>
          <div className="max-w-6xl">{convertRichText(aboutBody.json)}</div>
        </Section>

        <HR />

        <Section title={workHeading}>
          <div className="max-w-6xl">{convertRichText(workBody.json)}</div>

          {employerData.map((employer, index) => (
            <WorkItem
              key={employer.employerName}
              logo={employer.logo}
              description={employer.description}
              dates={employer.dates}
            />
          ))}
        </Section>
      </main>
    </Page>
  )
}

export default App
