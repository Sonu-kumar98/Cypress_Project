class ProductPage{

    clickOnCheckOutButton(){
      //  
      return cy.get('a.nav-link.btn.btn-primary').click()
    }

    clickOnCheckAmountButton(){
         return cy.get('button.btn.btn-success').click()
        
      }

      clickOnCheckAmountButton(){
        return cy.get('button.btn.btn-success').click()
       
     }

    // with the help of export key javascript make sure 
// this class available for framework


}
export default ProductPage