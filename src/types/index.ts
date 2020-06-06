export interface NavigationItem {
  to: string
  label: string
  external?: boolean
}

export interface WorkItem {
  employerName: string
  logo: {
    file: {
      url: string
    }
  }
  dateTo?: Date
  dateFrom: Date
  description: {
    content: {}
  }
}
