import React from 'react'
import { render } from '@testing-library/react'

import FormRow from '../form-row.component'

describe('FormRow', () => {
  it('renders its children', () => {
    const childText = 'Labrador'

    const { getByText } = render(
      <FormRow>
        <h1>{childText}</h1>
      </FormRow>,
    )

    expect(getByText(childText)).toBeTruthy()
  })
})
