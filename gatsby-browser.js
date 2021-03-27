/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import './src/styles/global.css'
import { datadogRum } from '@datadog/browser-rum'

export function onClientEntry() {
  datadogRum.init({
    applicationId: '76472943-03df-46ea-8203-1d1f01772137',
    clientToken: 'pub8480a4428dec22f44faaea29f6880f09',
    site: 'datadoghq.eu',
    service: 'bertieblackman',
    sampleRate: 100,
    trackInteractions: true,
    env: process.env.NODE_ENV,
  })
}
