import React from 'react'

import Button from '../button'

interface FormSubmitProps {
  text: string
}

const FormSubmit: React.FC<FormSubmitProps> = ({ text }) => (
  <div className="flex items-center justify-between">
    <Button text={text} />
  </div>
)

export default FormSubmit
