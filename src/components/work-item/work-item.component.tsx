import React from 'react'

import Section from '../../layouts/section'

import HR from '../../components/hr'

import { EmployerData } from '../../constants'

interface WorkItemProps extends EmployerData {
  hasHR?: boolean
}

const WorkItem: React.FC<WorkItemProps> = ({ Logo, dates, description, hasHR }) => (
  <>
    <Section>
      <div className="max-w-3xl">
        <Logo className="h-12" />

        <p className="mt-6 font-bold">
          {dates.from} - {dates.to}
        </p>

        <p className="mt-4">{description}</p>
      </div>
    </Section>

    {hasHR && <HR />}
  </>
)

export default WorkItem
