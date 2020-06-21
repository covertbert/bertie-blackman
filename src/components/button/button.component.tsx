import React from 'react'
import classnames from 'classnames'

export interface ButtonProps {
  onClick?: () => void
  text: string
  type?: 'submit' | 'button' | 'reset'
  className?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, text, type, className }) => (
  <button
    onClick={onClick}
    type={type}
    className={classnames('bg-secondary text-accent text-xl p-2 w-32 font-display', className)}
  >
    {text}
  </button>
)

export default Button
