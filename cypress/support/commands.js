Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    cy.get('#firstName').type('Rodrigo')
    cy.get('#lastName').type('Lacerda')
    cy.get('#email').type('rodrigo.lacerda@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})