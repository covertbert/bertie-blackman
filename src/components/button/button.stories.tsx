import React from 'react'
import { action } from '@storybook/addon-actions'

import Button, { ButtonProps } from './button.component'

export default {
  component: Button,
  title: 'Button',
}

const buttonProps = {
  text: 'Submit',
  type: 'submit',
} as ButtonProps

export const Submit = () => <Button onClick={action('button-click')} {...buttonProps} />
