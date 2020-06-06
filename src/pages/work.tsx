import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Document } from '@contentful/rich-text-types'

import Page from '@layouts/page'

import Hero from '@components/hero'
import WorkItem from '@components/work-item'
import { WorkItem as WorkItemType } from '@typings'

interface WorkQuery {
  allContentfulWork: {
    totalCount: number
    nodes: WorkItemType[]
  }
  contentfulHero: {
    heading: string
    body: {
      json: Document
    }
  }
}

const getWorkItemsFromQuery = ({ allContentfulWork: { nodes } }: WorkQuery) =>
  nodes.map(({ employerName, logo, dateFrom, dateTo, description }) => ({
    dates: { from: dateFrom, to: dateTo },
    description: description.json,
    employerName,
    logo: { alt: logo.title, url: logo.file.url },
  }))

const App = () => {
  const data = useStaticQuery<WorkQuery>(graphql`
    query WorkQuery {
      contentfulHero(slug: { eq: "work" }) {
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
    }
  `)

  const employerData = getWorkItemsFromQuery(data)

  return (
    <Page title="work">
      <Hero heading={data.contentfulHero.heading} body={data.contentfulHero.body.json} />

      {employerData.map((employer, index) => (
        <WorkItem
          key={employer.employerName}
          logo={employer.logo}
          description={employer.description}
          dates={employer.dates}
          hasHR={index + 1 < data.allContentfulWork.totalCount}
        />
      ))}
    </Page>
  )
}

export default App
