/* eslint-disable no-undef */
module.exports = ({ github, context }) => {
  console.log('HJHGHGHG', context.payload.commits)

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
