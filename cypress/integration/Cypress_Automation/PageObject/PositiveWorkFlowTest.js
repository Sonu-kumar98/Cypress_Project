/// <reference types="Cypress" />
import HomePage from '../PageObject/HomePage'
import ProductPage from '../PageObject/ProductPage'
import DeliveryLoaction from '../PageObject/DeliveryLocation'

describe("testing framework test suite", function(){ 

    before(function() {          // this is root level block u can write before it block after describe block
    cy.fixture('automation').then(function(data){
    this.data= data;
})
      })
      
    it("Single test cases", function(){
        // Create object from home page
         const homePage=new HomePage();
         const productPage = new ProductPage()
         const deliveryLoaction=new DeliveryLoaction()
          // Navigate to Website
          cy.visit("https://rahulshettyacademy.com/angularpractice/")
          homePage.getEditNametext().type(this.data.name)  // [name='name']:nth-child(2) // via using tag name
          homePage.selectGenderName().select(this.data.gender)
          homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        //  cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
          // cy.pause(); only used debug purpose
          homePage.getEntrepreneurRadioButton().should('be.disabled')
          // Click on shop button
          homePage.clickOnShopTab().click()
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
    productPage.clickOnCheckOutButton();

cy.get('tr td:nth-child(3) strong')

var sum=0;
cy.get('tr td:nth-child(3) strong').each(($element, index,$list)=>{
   
    const actualText = $element.text()
    var res = actualText.split(" ")
    res=res[1].trim()
    // Just u can explictly tell that 
    sum = Number(sum)+Number(res)
   
    // if($element.text().includes(productName)){
    //     cy.get('button.btn.btn-info').eq(index).click()

    // }

})
cy.get('h3 strong').then(function($element){
    const amount = $element.text()
    var total = amount.split(" ")
    total=total[1].trim()
    expect(Number(total)).to.be.equal(sum)
})

    // Click on check out amount button
    productPage.clickOnCheckAmountButton();
    // choose delivery location
    deliveryLoaction.chooseDeliveryLocation().type(this.data.location)
    // select location
    cy.wait(7000)
    deliveryLoaction.selectDeliveryLocation()
    // Click on check box
    deliveryLoaction.clickOnCheckBox()
    // Click on purchases button
    deliveryLoaction.clickOnPurchaseButton()
    // Validate success message
    deliveryLoaction.validateSucessMessage()
    })
    

})