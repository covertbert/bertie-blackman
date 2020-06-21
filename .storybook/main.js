const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  presets: ['@storybook/preset-typescript'],
  webpackFinal: async config => {
    config.module.rules[0].use[0].options.plugins[1] = [
      '@babel/plugin-proposal-class-properties',
      { loose: true },
    ]
    return config
  },
}
