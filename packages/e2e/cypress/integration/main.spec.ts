describe('The main page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is accessible', () => {
    cy.get('h1').contains('software engineer')
  })

  it('links to blog', () => {
    cy.get('a').contains('blog').click()
    cy.get('h1').contains('Blog').should('be.visible')
  })

  it('links to work', () => {
    cy.get('a').contains('work').click()
    cy.get('h1').contains('Work').should('be.visible')
  })
})
