/* eslint-disable no-undef */
module.exports = ({ github }) => {
  console.log('HJHGHGHG', github)

  const prHasAuthor =
    github.event.commits[0] &&
    github.event.commits[0].author &&
    github.event.commits[0].author.username

  if (prHasAuthor) {
    const prAuthorUsername = github.event.commits[0].author.username
    core.setOutput('author', prAuthorUsername)
  }

  core.setOutput('author', github.actor)
}
