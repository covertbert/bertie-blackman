import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Page from '@layouts/page'

import Hero from '@components/hero'
import WorkItem from '@components/work-item'

import { WorkQuery } from './types'

const getWorkItemsFromQuery = ({ allContentfulWork: { edges } }: WorkQuery) =>
  edges.map(({ node: { employerName, logo, dateFrom, dateTo, description } }) => ({
    description: description.json,
    employerName,
    logo: {
      url: logo.file.url,
      alt: logo.title,
    },
    dates: {
      from: dateFrom,
      to: dateTo,
    },
  }))

const App = () => {
  const data = useStaticQuery<WorkQuery>(graphql`
    query WorkQuery {
      allContentfulWork(sort: { fields: dateTo, order: DESC }) {
        totalCount
        edges {
          node {
            description {
              json
            }
            dateTo
            dateFrom
            siteUrl
            logo {
              file {
                url
              }
              title
            }
          }
        }
      }
    }
  `)

  const employerData = getWorkItemsFromQuery(data)

  return (
    <Page title="work">
      <Hero
        heading="work"
        body="I've spent the last 5 years in the industry working on a variety of products backed by varying tech stacks, giving me the experience to adapt to any working environment."
      />

      {employerData.map((employer, index) => (
        <WorkItem
          key={employer.employerName}
          logo={employer.logo}
          description={employer.description}
          dates={employer.dates}
          hasHR={index + 1 < data.totalCount}
        />
      ))}
    </Page>
  )
}

export default App
