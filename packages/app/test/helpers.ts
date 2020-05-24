const getMetaTagValue = (metaName: string) => {
  const metaTags = document.getElementsByTagName('meta')

  for (let i = 0; i < metaTags.length; i++) {
    if (metaTags[i].getAttribute('name') === metaName) {
      return metaTags[i].getAttribute('content')
    }
  }

  return ''
}

export { getMetaTagValue }
