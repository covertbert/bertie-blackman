/* eslint-disable react/display-name */
import React from 'react'
import { INLINES, MARKS, BLOCKS } from '@contentful/rich-text-types'
import { Options } from '@contentful/rich-text-react-renderer'

import { Bold, Italic, Paragraph, HyperLink } from './components'

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: children => <Bold>{children}</Bold>,
    [MARKS.ITALIC]: children => <Italic>{children}</Italic>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => <HyperLink href={node.data.uri}>{children}</HyperLink>,
    [BLOCKS.PARAGRAPH]: (_node, children) => <Paragraph>{children}</Paragraph>,
  },
}

export default options
