const allSquads = {
  search: ['covertbert', 'Pushedskydiver', 'kevcjones-cinch', 'scottbcodes', 'cinch-wilson'],
}

const getSquad = (author, squads) =>
  Object.entries(squads).reduce((previousValue, currentValue) => {
    const [squad, users] = currentValue
    if (users.includes(author)) {
      return squad
    }
    return previousValue
  }, 'shared')

console.log(getSquad('Pushedskydiver', allSquads))
