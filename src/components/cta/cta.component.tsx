import React from 'react'
import classnames from 'classnames'

import Button from '@components/button'

export interface CTAProps {
  handleClick: () => void
  text: string
  className?: string
}

const CTA: React.FC<CTAProps> = ({ handleClick, text, className }) => (
  <Button
    onClick={handleClick}
    text={text}
    className={classnames('text-2xl p-4 m-5 ml-0 w-40', className)}
  />
)

export default CTA
