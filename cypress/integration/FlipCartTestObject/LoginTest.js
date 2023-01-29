/// <reference types="cypress" />
import LoginPage from "../FlipCartPageObjectModel/LoginPage";
import BasePage from  "../FlipCartPageObjectModel/BasePage";

// Author by sonu kumar
describe("makeing page object model", function(){


    // we are craeting before method of the test cases
    // accessing the value from the json file of 
    before(function() {
        cy.fixture('credentials').then(function(testdata){
            this.testdata= testdata

        })
    })

    
    it("Login with valid test data", function(){
        const basic = new BasePage();
        basic.lunchApplication();
        const login = new LoginPage();
       // const basic = new Basepage();
      
        login.enterEmailId(this.testdata.username);
        login.enterPassword(this.testdata.password);
        login.submit();
        // we are using chai assertaion for validating the page of the url
        cy.url().should('be.equal', this.testdata.adminUrl)
        cy.screenshot('Take a screenshot after successfully login website');
    })


})