import React from 'react'
import { render } from '@testing-library/react'

import FormSubmit from '../form-submit.component'

describe('FormSubmit', () => {
  it('renders its text', () => {
    const childText = 'Husky'

    const { getByText } = render(<FormSubmit text={childText} />)

    expect(getByText(childText)).toBeTruthy()
  })
})
