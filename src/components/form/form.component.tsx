import React from 'react'

interface FormProps {
  name: string
  onSubmit: () => void
}

const Form: React.FC<FormProps> = ({ children, name, onSubmit }) => (
  <form
    name={name}
    action="/form/success"
    className="w-full max-w-4xl"
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    onSubmit={onSubmit}
  >
    <input type="hidden" name="bot-field" />
    {children}
  </form>
)

export default Form
