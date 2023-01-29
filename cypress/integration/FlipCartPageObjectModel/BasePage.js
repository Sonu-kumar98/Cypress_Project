/// <reference types="cypress" />
class BasePage{

    lunchApplication() {
        cy.visit('https://admin-demo.nopcommerce.com/')

    }
}
 export default BasePage