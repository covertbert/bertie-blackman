import { WorkItem } from '@typings'

export interface WorkQuery {
  allContentfulWork: {
    totalCount: number
    edges: WorkItem[]
  }
}
