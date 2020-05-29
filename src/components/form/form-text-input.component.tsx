/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import classnames from 'classnames'

interface FormTextInputProps {
  label: string
  width?: 'full' | 'half'
}

const FormTextInput: React.FC<FormTextInputProps> = ({ label, width = 'full' }) => (
  <div className={classnames('w-full px-3 md:mb-0', width === 'full' ? 'w-full' : 'md:w-1/2')}>
    <input
      className="appearance-none w-full py-4 px-4 border-2 border-primary text-primary placeholder-primary leading-tight focus:outline-none text-lg"
      id={label}
      name={label}
      type="text"
      placeholder={label}
      aria-label={label}
    />
  </div>
)

export default FormTextInput
