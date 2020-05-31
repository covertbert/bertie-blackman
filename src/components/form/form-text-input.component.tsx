/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import classnames from 'classnames'

export interface FormTextInputProps {
  label: string
  width?: 'full' | 'half'
  className?: string
  required?: boolean
}

const FormTextInput: React.FC<FormTextInputProps> = ({
  label,
  width = 'full',
  className,
  required = false,
}) => (
  <div className={classnames('w-full px-3', width === 'full' ? 'w-full' : 'md:w-1/2', className)}>
    <input
      className="appearance-none w-full py-4 px-4 border-2 border-primary text-primary placeholder-primary leading-tight focus:outline-none text-lg"
      id={label}
      name={label}
      type="text"
      placeholder={label}
      aria-label={label}
      required={required}
    />
  </div>
)

export default FormTextInput
