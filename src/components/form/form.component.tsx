import React from 'react'

const Form: React.FC = ({ children }) => (
  <form
    name="contact"
    className="w-full max-w-2xl"
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    {children}
  </form>
)

export default Form
