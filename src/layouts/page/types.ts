import { NavigationItem } from '../../types'

export interface PageQuery {
  allContentfulNavigation: {
    totalCount: number
    nodes: NavigationItem[]
  }
}
