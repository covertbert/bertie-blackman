const getMetaTagContent = (name: string) => {
  const matchingTags = Object.values(
    document.getElementsByTagName('meta'),
  ).filter(tag => tag.name === name)

  if (matchingTags[0]) {
    return matchingTags[0].getAttribute('content')
  }

  throw new Error('There are no meta tags that match the input name')
}

export { getMetaTagContent }
