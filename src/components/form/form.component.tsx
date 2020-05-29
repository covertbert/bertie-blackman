import React from 'react'

const Form: React.FC = ({ children }) => (
  <form
    name="contact"
    className="w-full max-w-3xl"
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <input type="hidden" name="bot-field" />
    {children}
  </form>
)

export default Form
