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

// const getSquad = author => {}

module.exports = ({ context, core }) => {
  const author = getAuthor(context)

  core.setOutput('author', author)
  // core.setOutput('squad', getSquad(author))
}
