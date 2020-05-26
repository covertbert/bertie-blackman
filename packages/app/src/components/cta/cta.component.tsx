import React from 'react'
import classnames from 'classnames'

interface CTAProps {
  text: string
  className?: string
}

const CTA: React.FC<CTAProps> = ({ text, className }) => (
  <button
    className={classnames(
      'bg-secondary text-white text-2xl p-5 m-5 w-48 max-w-sm font-display',
      className,
    )}
  >
    {text}
  </button>
)

export default CTA
