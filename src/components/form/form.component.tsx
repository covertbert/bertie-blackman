import React from 'react'

const Form: React.FC = ({ children }) => (
  <form
    name="contact"
    action="/form/success"
    className="w-full max-w-4xl"
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <input type="hidden" name="bot-field" />
    {children}
  </form>
)

export default Form
