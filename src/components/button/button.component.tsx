import React from 'react'
import classnames from 'classnames'

export interface ButtonProps {
  text: string
  type?: 'submit' | 'button' | 'reset'
  className?: string
}

const Button: React.FC<ButtonProps> = ({ text, type, className }) => (
  <button
    type={type}
    className={classnames('bg-secondary text-accent text-xl p-2 w-32 font-display', className)}
  >
    {text}
  </button>
)

export default Button
