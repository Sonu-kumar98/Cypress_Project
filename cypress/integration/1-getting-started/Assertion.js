describe('Assertion topic', () => {

beforeEach( () =>{
    cy.visit('https://demoqa.com/radio-button')

})


it('Verify the length of radio button using TDD Asseration', () =>{
cy.get('.mb-3').should('have.text', 'Do you like the site?')
cy.log('First Asseration Successful')
cy.log('Length check.......')
cy.get('input[type="radio"]').should('have.length',3)
cy.log('Second Asseration Successful')
cy.log('class check.......')
cy.get('input[type="radio"]').eq(2).should('have.class', 'disabled')
cy.log('Third Asseration Successful')

cy.log('Exist check')
cy.get('.mt-3').should('not.exist')

cy.log('Text check')
cy.get('input[type="radio"]').eq(0).click({force : true})
cy.get('.mt-3').should('have.text', 'You have selected Yes')
cy.log('CSS check')
cy.get('.text-success').should('have.css','color', 'rgb(40, 167, 69)')




})

})