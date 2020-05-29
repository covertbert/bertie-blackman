/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'

interface FormTextareaInputProps {
  label: string
}

const FormTextareaInput: React.FC<FormTextareaInputProps> = ({ label }) => (
  <div className="w-full px-3">
    <label className="block text-gray-700 text-sm font-bold mb-2 invisible" htmlFor={label}>
      {label}
    </label>
    <textarea
      className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={label}
      name={label}
      placeholder={label}
    />
  </div>
)

export default FormTextareaInput
