import { MutableRefObject } from 'react'

const scrollToRef = <T extends HTMLElement>(ref: MutableRefObject<T | null>): void => {
  if (!ref.current) {
    throw new Error('Input ref is null')
  }

  window.scrollTo(0, ref.current.offsetTop)
}

export default scrollToRef
