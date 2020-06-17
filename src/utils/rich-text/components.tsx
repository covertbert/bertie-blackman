import React from 'react'

const Bold: React.FC = ({ children }) => <span className="font-bold">{children}</span>
const Italic: React.FC = ({ children }) => <span className="italic">{children}</span>
const Paragraph: React.FC = ({ children }) => <p>{children}</p>

const HyperLink: React.FC<{ href: string }> = ({ children, href }) => (
  <a href={href} className="underline" target="blank" rel="noreferrer">
    {children}
  </a>
)

export { Bold, Italic, Paragraph, HyperLink }
