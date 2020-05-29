/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'

export interface FormTextareaInputProps {
  label: string
}

const FormTextareaInput: React.FC<FormTextareaInputProps> = ({ label }) => (
  <div className="w-full px-3">
    <textarea
      className="appearance-none w-full py-4 px-4 border-2 border-primary text-primary placeholder-primary leading-tight leading-tight focus:outline-none text-lg h-48"
      id={label}
      name={label}
      placeholder={label}
      aria-label={label}
    />
  </div>
)

export default FormTextareaInput
