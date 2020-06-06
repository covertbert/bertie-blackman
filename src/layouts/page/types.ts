import { NavigationItem } from '@typings'

export interface PageQuery {
  allContentfulNavigation: {
    totalCount: number
    nodes: NavigationItem[]
  }
}
