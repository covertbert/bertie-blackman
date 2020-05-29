import { MutableRefObject } from 'react'

import scrollToRef from '../scrollToRef'

describe('scrollToRef', () => {
  it('throws an error when the give ref has no "current" property', () => {
    const mockRef = ({ foo: 'bar' } as unknown) as MutableRefObject<HTMLElement>

    expect(() => scrollToRef(mockRef)).toThrow()
  })
})
