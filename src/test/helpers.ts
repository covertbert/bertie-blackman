const getMetaTagContent = (name: string): string => {
  const matchingTags = Object.values(document.getElementsByTagName('meta')).filter(
    tag => tag.name === name,
  )
  if (matchingTags.length > 1) {
    throw new Error('There is more than one meta tag with the given input name')
  }

  const matchingTagContent = matchingTags[0].getAttribute('content')
  if (!matchingTagContent) {
    throw new Error('There are no meta tags that match the input name')
  }

  return matchingTagContent
}

export { getMetaTagContent }
