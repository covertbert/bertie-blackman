/* eslint-disable no-undef */

// Add your squad and users here
const allSquads = {
  search: ['covertbert', 'Pushedskydiver', 'kevcjones-cinch', 'scottbcodes', 'cinch-wilson'],
}

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

const getSquad = (author, squads) =>
  Object.entries(squads).reduce((previousValue, currentValue) => {
    const [squad, users] = currentValue
    if (users.includes(author)) {
      return squad
    }
    return previousValue
  }, 'shared')

module.exports = ({ context, core }) => {
  const author = getAuthor(context)

  core.setOutput('author', author)
  core.setOutput('squad', getSquad(author, allSquads))
}
