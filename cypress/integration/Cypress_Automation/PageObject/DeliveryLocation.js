class DeliveryLoaction{

    chooseDeliveryLocation(){
        return cy.get('#country')
      }

    selectDeliveryLocation(){
        return cy.get('.suggestions > ul > li > a').click()
      }

      clickOnPurchaseButton(){
        return cy.get('.ng-untouched > .btn').click()
      }

      clickOnCheckBox(){
        return cy.get('#checkbox2').click({force: true})
      }

      validateSucessMessage(){
      //  return cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-)')
      return cy.get('.alert').then(function(element){
          const actualText = element.text()
        //   if(){

        //   }
        expect(actualText.includes("Success")).to.be.true
      })
    
    
    
    }
      
}

export default DeliveryLoaction