import { Document } from '@contentful/rich-text-types'
export interface NavigationItem {
  to: string
  label: string
  external?: boolean
}

export interface WorkItem {
  node: {
    employerName: string
    logo: { file: { url: string }; title: string }
    dateTo?: Date
    dateFrom: Date
    description: { json: Document }
  }
}
