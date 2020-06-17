import React from 'react'
import { render } from '@testing-library/react'

import { Paragraph, Italic, Bold, HyperLink } from '../components'

describe('Paragraph', () => {
  it('renders the child text correctly', () => {
    const text = 'Some paragraph text'
    const { getByText } = render(<Paragraph>{text}</Paragraph>)

    expect(getByText(text)).toBeTruthy()
  })
})

describe('Italic', () => {
  const text = 'Some italic text'

  it('renders the child text correctly', () => {
    const { getByText } = render(<Italic>{text}</Italic>)

    expect(getByText(text)).toBeTruthy()
  })

  it('adds the correct classes', () => {
    const { container } = render(<Italic>{text}</Italic>)

    expect(container.querySelector('span')!.classList.contains('italic')).toBeTruthy()
  })
})

describe('Bold', () => {
  const text = 'Some bold text'

  it('renders the child text correctly', () => {
    const { getByText } = render(<Bold>{text}</Bold>)

    expect(getByText(text)).toBeTruthy()
  })

  it('adds the correct classes', () => {
    const { container } = render(<Bold>{text}</Bold>)

    expect(container.querySelector('span')!.classList.contains('font-bold')).toBeTruthy()
  })
})

describe('HyperLink', () => {
  const url = 'https://dogs.com'
  const text = 'Link to dog'

  it('renders the child text correctly', () => {
    const { getByText } = render(<HyperLink href={url}>{text}</HyperLink>)

    expect(getByText(text)).toBeTruthy()
  })

  it('contains the correct anchor attributes', () => {
    const { container } = render(<HyperLink href={url}>{text}</HyperLink>)

    const link = container.querySelector('a')!

    expect(link.getAttribute('href')).toEqual(url)
    expect(link.getAttribute('target')).toEqual('blank')
    expect(link.getAttribute('rel')).toEqual('noreferrer')
    expect(link.classList.contains('underline')).toBeTruthy()
  })
})
