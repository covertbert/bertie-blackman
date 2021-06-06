import React from 'react'
import { Document } from '@contentful/rich-text-types'

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
}

const WorkItem: React.FC<WorkItemProps> = ({ logo, dates, description }) => (
  <>
    <section className={'flex flex-col py-6 text-lg bg-white'}>
      <div className="max-w-6xl text-lg">
        <img src={logo.url} alt={logo.alt} className="h-8" />

        <p className="mt-6 mb-4 font-bold">
          {dates.from} - {dates.to ? dates.to : 'Current'}
        </p>

        {convertRichText(description)}
      </div>
    </section>
  </>
)

export default WorkItem
