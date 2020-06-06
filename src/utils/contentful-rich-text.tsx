/* eslint-disable react/display-name */
import React from 'react'
import { INLINES, MARKS, BLOCKS, Document } from '@contentful/rich-text-types'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: children => <span className="font-bold">{children}</span>,
    [MARKS.ITALIC]: children => <span className="italic">{children}</span>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} className="underline text-primary" target="blank" rel="noreferrer">
        {children}
      </a>
    ),
    [BLOCKS.PARAGRAPH]: (_node, children) => <p className="mt-4">{children}</p>,
  },
}

const convertRichText = (richTextDocument: Document) =>
  documentToReactComponents(richTextDocument, options)

export default convertRichText
