import React from 'react'

export interface FormTextareaInputProps {
  label: string
  required?: boolean
  ref: any
}

const FormTextareaInput: React.FC<FormTextareaInputProps> = ({ label, required, ref }) => (
  <div className="w-full px-3">
    <textarea
      className="appearance-none w-full py-4 px-4 border-2 border-accent text-accent placeholder-accent leading-tight leading-tight focus:outline-none text-lg h-48"
      id={label}
      name={label}
      placeholder={label}
      aria-label={label}
      required={required}
      ref={ref}
    />
  </div>
)

export default FormTextareaInput
