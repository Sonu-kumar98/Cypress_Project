/// <reference types="Cypress" />
import { indexOf } from "../Udemy_Tutorial/CheckBoxCypress.js"
//import { wrap } from "cypress/types/lodash"

describe('My second test suite', function(){

    it('My first test cases', function(){

        // Navigate to Website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // Verify check box
        // If u are checking behaviour of web element then u can used be.{}
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check('option2','option3')

        // Handle static drop down
        // in here select metghod provided by cypress to handle drop down
        cy.get('select').select('option2').should('have.value','option2')

        // Handle by Dynamic Drop down in cypress
        cy.get('#autocomplete').type('ind')
       // Iterating over all element of drop down then after that we are selecting single 
       // element on there
        cy.get('.ui-menu-item div').each(($e1, index, $list)=>{
            if($e1.text()=='India'){
                $e1.click()
            }

        })
      // Validate drop down selected element
      cy.get('#autocomplete').should('have.value','India')
      //visible invisible condition of text field
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      // Handle radio button in cypress it's similar like check box concept 
      //radio buttons
     cy.get('[value="radio2"]').check().should('be.checked')

    })
   
})