/// <reference types="Cypress" />

//const { data } = require("cypress/types/jquery");

describe("testing framework test suite", function(){ 

    before(function() {          // this is root level block u can write before it block after describe block
    cy.fixture('automation').then(function(data){
    this.data= data;
})
      })
      
    it("Single test cases", function(){
          // Navigate to Website
          cy.visit("https://rahulshettyacademy.com/angularpractice/")
          cy.get(':nth-child(1) > .form-control').type(this.data.name)  // [name='name']:nth-child(2) // via using tag name
          cy.get("select").select(this.data.gender)
          cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
          cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
          cy.pause();
          cy.get('#inlineRadio3').should('be.disabled')
          // Click on shop button
          cy.get(':nth-child(2) > .nav-link').click()
        //   cy.get('h4.card-title').each(($element, index,$list)=>{
        //       if($element.text().includes('Blackberry')){
        //           cy.get('button.btn.btn-info').eq(index).click()

        //       }

        //   })
        // This is custom command 
    //    cy.selectProduct(this.data.productBlackBerry)
    //    cy.selectProduct(this.data.productNokia)
// Paramatrization
    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    });



    })

})