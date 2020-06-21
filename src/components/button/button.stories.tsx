import React from 'react'
import { action } from '@storybook/addon-actions'

import Button, { ButtonProps } from './button.component'

export default {
  component: Button,
  title: 'Button',
}

const buttonProps: ButtonProps = {
  onClick: action('submit'),
  text: 'Submit',
  type: 'submit',
}

export const Submit = () => <Button {...buttonProps} />
