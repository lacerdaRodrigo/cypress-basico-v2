//<reference types="Cypress" />


describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
    //cy.visit('./src/index.html')
  })

  it('verificar titulo da aplicação', () => {

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

  })

  it('preencher os campos obrigatorios e envia o formulario', () => {
    const textLong = "Teste, teste,, teste,, teste,, teste,, teste,, teste,, teste,, teste,, teste,, teste,, teste,, teste."

    cy.get('#firstName').type('Rodrigo')
    cy.get('#lastName').type('Lacerda')
    cy.get('#email').type('rodrigo.lacerda@gmail.com')
    cy.get('#open-text-area').type(textLong, { delay: 0 })
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')

  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    cy.get('#firstName').type('Rodrigo')
    cy.get('#lastName').type('Lacerda')
    cy.get('#email').type('rodrigo.lacerda@gmail,com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('valor vazio no campo telefone', () => {

    cy.get('#phone').type('abc').should('have.value', '')

  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    cy.get('#firstName').type('Rodrigo')
    cy.get('#lastName').type('Lacerda')
    cy.get('#email').type('rodrigo.lacerda@gmail.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')

  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {

    cy.get('#firstName')
      .type('Rodrigo')
      .should('have.value', 'Rodrigo')
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type('Lacerda')
      .should('have.value', 'Lacerda')
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .type('rodrigo.lacerda@gmail.com')
      .should('have.value', 'rodrigo.lacerda@gmail.com')
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .type('31984288495')
      .should('have.value', '31984288495')
      .clear()
      .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {

    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')

  })

  it('envia o formuário com sucesso usando um comando customizado', () => {

    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })

  it('selecione um produto (Youtube) e seu texto', () => {

   

    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')

  })


  it('selecione um produto (mentoria) e seu valor (value)', () => {

    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')

  })

  it('selecione um produto (Blog) pelo seu indice', () => {

    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')

  })

  it('marca o tipo de atendimento "feedback"', () => {

    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('have.value','feedback')

  })

  it('marca cada tipo de atendimento', () => {

    cy.get('input[type="radio"]')
      .should('have.length' , 3)
      .each(function($radio){
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
      })
      
  })

  it.only('marca ambos checkboxes, depois desmarca o último', () => {

    cy.get('input[type="checkbox"]')
      .check()
      should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
 
      
  })

})