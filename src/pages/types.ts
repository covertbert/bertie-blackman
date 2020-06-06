import { WorkItem } from '@typings'

export interface WorkQuery {
  totalCount: number
  allContentfulWork: {
    totalCount: number
    edges: WorkItem[]
  }
}
