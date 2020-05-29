/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'

interface FormTextInputProps {
  label: string
}

const FormTextInput: React.FC<FormTextInputProps> = ({ label }) => (
  <div className="w-full md:w-1/2 px-3 md:mb-0">
    <label className="block text-gray-700 text-sm font-bold mb-2 invisible" htmlFor={label}>
      {label}
    </label>
    <input
      className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={label}
      name={label}
      type="text"
      placeholder={label}
    />
  </div>
)

export default FormTextInput
