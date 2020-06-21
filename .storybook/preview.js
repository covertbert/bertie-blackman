import React from 'react'
import { addDecorator } from '@storybook/react'
import Layout from './layout'

addDecorator(storyFn => <Layout>{storyFn()}</Layout>)
