import React from 'react'
import { Document } from '@contentful/rich-text-types'

import Section from '@layouts/section'
import HR from '@components/hr'
import { convertRichText } from '@utils'

export interface WorkItemProps {
  logo: {
    url: string
    alt: string
  }
  dates: {
    from: string
    to?: string
  }
  description: Document
  hasHR?: boolean
}

const WorkItem: React.FC<WorkItemProps> = ({ logo, dates, description, hasHR }) => (
  <>
    <Section>
      <div className="max-w-4xl text-lg">
        <img src={logo.url} alt={logo.alt} className="h-8" />

        <p className="mt-6 mb-4 font-bold">
          {dates.from} - {dates.to ? dates.to : 'Current'}
        </p>

        {convertRichText(description)}
      </div>
    </Section>

    {hasHR && <HR />}
  </>
)

export default WorkItem
