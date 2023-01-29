/// <reference types="Cypress" />

import { indexOf } from "../Udemy_Tutorial/basicCommand_TestOne.js"

describe('This is my first test suite', function()  
// describe is group is function it'll take two arugement first
// test name and second callback function u can defind multiple function in single file.
{
    it('This is my first test case', function(){
        // it is used for an individual test case. akes two arguments, a string explaining what the test should do, and a callback function which contains our actual test:
        // context() is just an alias for describe()
        // specify() is an alias for it()
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        // Use of Parent child chaining concept in cypress
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
// We are using list for iterating all element in array 
cy.get('@productLocator').find('.product').each(($el, index,$list) =>{

    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('Cashews')){
      cy.wrap($el).find('button').click()
    }
})
// assert logo text is display correctly on he web page
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

//this is to print in logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
 
})
console.log('sf')
    })
})