/* eslint-disable no-undef */

const getAuthor = context => {
  const mergeCommitHasAuthor =
    context.payload.commits[0] &&
    context.payload.commits[0].author &&
    context.payload.commits[0].author.username

  if (mergeCommitHasAuthor) {
    const mergeCommitUsername = context.payload.commits[0].author.username
    return mergeCommitUsername
  }

  return context.actor
}

module.exports = ({ context, core }) => {
  core.setOutput('author', getAuthor(context))
}
