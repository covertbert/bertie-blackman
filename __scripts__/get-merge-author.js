/* eslint-disable no-undef */
module.exports = ({ github }) => {
  const prAuthorUsername = github.event.commits[0]?.author?.username

  if (prAuthorUsername) {
    core.setOutput('author', prAuthorUsername)
  }

  core.setOutput('author', github.actor)
}
