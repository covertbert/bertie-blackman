import React from 'react'
import { render } from '@testing-library/react'

import FormTextInput, { FormTextInputProps } from '../form-text-input.component'

describe('FormTextInput', () => {
  it('applies the label to the correct input attributes', () => {
    const props: FormTextInputProps = {
      label: 'Basset Hound',
    }

    const { getByLabelText, getByPlaceholderText } = render(<FormTextInput {...props} />)

    expect(getByLabelText(props.label)).toBeTruthy()
    expect(getByPlaceholderText(props.label)).toBeTruthy()
  })

  it('applies the correct class when given the "half" width prop', () => {
    const props: FormTextInputProps = {
      label: 'Basset Hound',
      width: 'half',
    }

    const { container } = render(<FormTextInput {...props} />)

    expect(container.querySelector('div')!.classList.contains('md:w-1/2')).toBeTruthy()
  })
})
