describe('As a user', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.get('button').contains('contact me').should('be.visible').as('contactButton')

    cy.get('input[name="name"]').should('be.visible').as('nameInput')
    cy.get('input[name="email"]').should('be.visible').as('emailInput')
    cy.get('textarea[name="message"]').should('be.visible').as('messageInput')

    cy.get('button').contains('Submit').should('be.visible').as('submit')
  })

  it('I can submit the contact form successfully', () => {
    cy.get('@contactButton').click()

    cy.get('@nameInput').type('Mr Pigeon')
    cy.get('@emailInput').type('mrpigeon@gmail.com')
    cy.get('@messageInput').type('I love your telephone wire!')

    cy.get('@submit').click()

    cy.url().should('include', 'success')
  })
})
