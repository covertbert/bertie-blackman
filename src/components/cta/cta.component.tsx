import React from 'react'
import classnames from 'classnames'

export interface CTAProps {
  text: string
  className?: string
  handleClick: () => void
}

const CTA: React.FC<CTAProps> = ({ text, className, handleClick }) => (
  <button
    className={classnames('bg-accent text-white text-2xl p-4 m-5 w-40 font-display', className)}
    onClick={handleClick}
  >
    {text}
  </button>
)

export default CTA
