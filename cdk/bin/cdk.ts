#!/usr/bin/env node
import 'source-map-support/register'
import { App } from '@aws-cdk/core'
import { StaticWebsiteStack } from '../lib/static-site'

const app = new App()

new StaticWebsiteStack(app, 'bertie-blackman', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
})
