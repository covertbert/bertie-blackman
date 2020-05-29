import React from 'react'

interface FormSubmitProps {
  text: string
}

const FormSubmit: React.FC<FormSubmitProps> = ({ text }) => (
  <div className="flex items-center justify-between">
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
      // type="submit"
    >
      {text}
    </button>
  </div>
)

export default FormSubmit
