import React from 'react'
import classnames from 'classnames'

export interface ButtonProps {
  text: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ text, className }) => (
  <button className={classnames('bg-accent text-white text-xl p-2 w-32 font-display', className)}>
    {text}
  </button>
)

export default Button
