import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'

import WorkItem, { WorkItemProps } from './work-item.component'

export default {
  component: WorkItem,
  title: 'WorkItem',
}

const logoURL = `data:image/svg+xml;base64,PHN2ZyBpZD0nbG9nb2lwc3VtJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNzcuNzc4
IDEwMCc+PHBhdGggZD0nTTMxLjk0MSw2Mi44MjVoMjUuNjVWMzcuMTc1SDMxLjk0MVpNNTIuNjU0LDQ3LjUzMmgtNS40MnYtNS40
Mmg1LjQyWm0tMTUuNzc3LTUuNDJINDIuM1Y1Mi40NjhINTIuNjU0djUuNDJIMzYuODc3Wm0zNy40MTctNC45MzdBMTIuODI1LDEy
LjgyNSwwLDEsMCw4Ny4xMTksNTAsMTIuODQsMTIuODQsMCwwLDAsNzQuMjk0LDM3LjE3NVptMCwyMC43MTNBNy44ODgsNy44ODgs
MCwxLDEsODIuMTgyLDUwLDcuOSw3LjksMCwwLDEsNzQuMjk0LDU3Ljg4OFptNTguNzE5LTIwLjcxM0ExMi44MjUsMTIuODI1LDAs
MSwwLDE0NS44MzcsNTAsMTIuODQsMTIuODQsMCwwLDAsMTMzLjAxMywzNy4xNzVabTAsMjAuNzEzQTcuODg4LDcuODg4LDAsMSwx
LDE0MC45LDUwLDcuOSw3LjksMCwwLDEsMTMzLjAxMyw1Ny44ODhabS0yOS4zNi0yMC43MTNBMTIuODI1LDEyLjgyNSwwLDEsMCwx
MTYuNDc4LDUwLDEyLjg0LDEyLjg0LDAsMCwwLDEwMy42NTMsMzcuMTc1Wm0wLDIwLjcxM2E3Ljg4OCw3Ljg4OCwwLDEsMSw3LjQ4
OC0xMC4zNTZoLTcuNDg4djQuOTM2aDcuNDg4QTcuOSw3LjksMCwwLDEsMTAzLjY1Myw1Ny44ODhaJyBmaWxsPScjMzk0MTQ5Jy8+
PC9zdmc+`
const bodyText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae volutpat elit. Cras in nisi auctor, vehicula lacus in, pharetra justo. Suspendisse posuere, libero at imperdiet laoreet, enim velit molestie tellus, ut ultrices nisl urna et libero.'

const buttonProps: WorkItemProps = {
  logo: {
    url: logoURL,
    alt: 'Example',
  },
  dates: {
    from: 'November 2039',
    to: 'October 2050',
  },
  description: {
    content: [
      {
        content: [
          {
            data: {},
            marks: [],
            nodeType: 'text',
            value: bodyText,
          },
        ],
        data: {},
        nodeType: BLOCKS.PARAGRAPH,
      },
    ],
    data: {},
    nodeType: BLOCKS.DOCUMENT,
  },
  hasHR: false,
}

export const Item = () => <WorkItem {...buttonProps} />
