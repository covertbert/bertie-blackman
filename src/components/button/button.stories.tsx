import React from 'react'
import Button, { ButtonProps } from './button.component'

export default {
  component: Button,
  excludeStories: /.*Props$/,
  title: 'Button',
}

const buttonProps = {
  text: 'Submit',
  type: 'submit',
} as ButtonProps

export const Submit = () => <Button {...buttonProps} />
