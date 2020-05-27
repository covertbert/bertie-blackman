import React from 'react'
import classnames from 'classnames'

export interface CTAProps {
  text: string
  className?: string
}

const CTA: React.FC<CTAProps> = ({ text, className }) => (
  <button
    className={classnames(
      'bg-secondary text-white text-2xl p-4 m-5 w-40 font-display',
      className,
    )}
  >
    {text}
  </button>
)

export default CTA
