import { MutableRefObject } from 'react'

import scrollToRef from '../scrollToRef'

describe('scrollToRef', () => {
  it('throws an error when the give ref has no "current" property', () => {
    const mockRef = ({ foo: 'bar' } as unknown) as MutableRefObject<HTMLElement>

    expect(() => scrollToRef(mockRef)).toThrow()
  })

  it('calls window.scrollTo with the given offset', () => {
    const mockRef = { current: { offsetTop: 100 } } as MutableRefObject<HTMLElement>
    window.scrollTo = jest.fn()

    scrollToRef(mockRef)

    expect(window.scrollTo).toBeCalledWith(0, mockRef.current.offsetTop)
  })
})
