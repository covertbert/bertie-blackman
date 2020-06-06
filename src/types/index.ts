import { Document } from '@contentful/rich-text-types'
export interface NavigationItem {
  to: string
  label: string
  external?: boolean
}

export interface WorkItem {
  employerName: string
  logo: { file: { url: string }; title: string }
  dateTo?: string
  dateFrom: string
  description: { json: Document }
}
