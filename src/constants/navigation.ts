const GITHUB_URL = 'https://github.com/covertbert/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/bertie-blackman-3654767a/'

interface NavigationItem {
  to: string
  label: string
  external?: boolean
}

const navigationItems: NavigationItem[] = [
  {
    to: '/work',
    label: 'work',
  },
  {
    to: '/blog',
    label: 'blog',
  },
  {
    to: GITHUB_URL,
    label: 'github',
    external: true,
  },
  {
    to: LINKEDIN_URL,
    label: 'linkedin',
    external: true,
  },
]

export default navigationItems
