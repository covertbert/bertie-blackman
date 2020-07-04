import React from 'react'
import { render } from '@testing-library/react'

import FormComponent, { FormProps } from '../form.component'

describe('FormComponent', () => {
  const props: FormProps = {
    name: 'labrador',
    onSubmit: jest.fn(),
  }

  it('renders the form name', () => {
    const { getByRole } = render(<FormComponent {...props} />)

    expect(getByRole('form').getAttribute('name')).toEqual('labrador')
  })

  it('renders its children', () => {
    const childText = 'Staffordshire Bull Terrier'

    const { getByText } = render(
      <FormComponent {...props}>
        <h1>{childText}</h1>
      </FormComponent>,
    )

    expect(getByText(childText)).toBeTruthy()
  })
})
