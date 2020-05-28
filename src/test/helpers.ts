const getMetaTagContent = (name: string) => {
  const matchingTags = Object.values(document.getElementsByTagName('meta')).filter(
    tag => tag.name === name,
  )

  if (matchingTags.length > 1) {
    throw new Error('There is more than one meta tag with the given input name')
  }

  const [matchingTag] = matchingTags

  if (!matchingTag) {
    throw new Error('There are no meta tags that match the input name')
  }

  return matchingTags[0].getAttribute('content')
}

export { getMetaTagContent }
