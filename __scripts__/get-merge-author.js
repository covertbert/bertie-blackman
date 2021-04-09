/* eslint-disable no-undef */
module.exports = ({ context, core }) => {
  console.log('HJHGHGHG', context.payload.commits[0].author)

  const prHasAuthor =
    context.payload.commits[0] &&
    context.payload.commits[0].author &&
    context.payload.commits[0].author.username

  if (prHasAuthor) {
    const prAuthorUsername = context.payload.commits[0].author.username
    core.setOutput('author', prAuthorUsername)
  }

  core.setOutput('author', context.actor)
}
