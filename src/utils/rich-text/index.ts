import { ReactNode } from 'react'
import { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import options from './options'

const convertRichText = (richTextDocument: Document): ReactNode =>
  documentToReactComponents(richTextDocument, options)

export default convertRichText
