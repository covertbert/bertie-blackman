#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { StaticWebsiteStack } from '../lib/static-site'

const app = new cdk.App()

new StaticWebsiteStack(app, 'bertie-blackman', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
})
