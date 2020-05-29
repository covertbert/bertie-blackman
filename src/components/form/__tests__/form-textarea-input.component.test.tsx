import React from 'react'
import { render } from '@testing-library/react'

import FormTextareaInput, { FormTextareaInputProps } from '../form-textarea-input.component'

describe('FormTextareaInput', () => {
  it('applies the label to the correct input attributes', () => {
    const props: FormTextareaInputProps = {
      label: 'Newfoundland',
    }

    const { getByLabelText, getByPlaceholderText } = render(<FormTextareaInput {...props} />)

    expect(getByLabelText(props.label)).toBeTruthy()
    expect(getByPlaceholderText(props.label)).toBeTruthy()
  })
})
