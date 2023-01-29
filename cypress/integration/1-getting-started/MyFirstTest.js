/// <reference types="cypress"/>
describe('myTestSuite', () => {

  // Login scenario in spotify website
    it('Verify Login Scenario', () => {

    // cy pre defind object in cypress
    cy.visit('https://www.spotify.com/in-en/')
    //cy.title().should('eq','Listening is everything')
    cy.get("[data-ga-action=log-in]").click()
    cy.get("#login-username").type("sonukumariimt22@gmail.com")

    cy.get("#login-password").type("Noida@18")
    cy.get("#login-button > div.ButtonInner-sc-14ud5tc-0.lbsIMA.encore-bright-accent-set").click()

    })
    
  })