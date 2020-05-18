module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'tsc'],
  '*.{ts,tsx,js,css,json,md,html,yml}': ['prettier --write'],
}
