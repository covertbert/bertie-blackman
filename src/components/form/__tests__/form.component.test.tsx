import React from 'react'
import { render } from '@testing-library/react'

import FormComponent from '../form.component'

describe('FormComponent', () => {
  it('renders its children', () => {
    const childText = 'Staffordshire Bull Terrier'

    const { getByText } = render(
      <FormComponent>
        <h1>{childText}</h1>
      </FormComponent>,
    )

    expect(getByText(childText)).toBeTruthy()
  })
})
