module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'tsc --noEmit'],
  '*.{ts,tsx,js,css,json,md,html,yml}': ['prettier --write'],
}
