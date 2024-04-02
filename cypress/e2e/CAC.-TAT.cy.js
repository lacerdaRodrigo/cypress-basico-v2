 //<reference types="Cypress" />


describe('template spec', () => {
  it('passes', () => {
    //cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
    cy.visit('./src/index.html')

    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    
  })
})