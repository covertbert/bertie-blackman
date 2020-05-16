describe('The main page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is accessible', () => {
    cy.get('div').contains('Hello world!')
  })
})
