//<reference types="Cypress" />

it('testa a pagina da politica de privacidade de uma forma independente' ,() =>{
    cy.visit('./src/privacy.html')

    cy.contains('Talking About Testing')
})