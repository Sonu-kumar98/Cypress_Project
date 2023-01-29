// We are making the code how to handle drop down section via using cypress
// You can used force true suppose any element is disable on web page or DOM structure.
describe('Drop down',() => {

    beforeEach( () =>{
        cy.visit('https://register.rediff.com/register/register.php')
        cy.reload();

    })


    it('This is my first test cases of drop down section', ()=> {
     
     //cy.get('select[id="country"]').select('99').should('have.value', '99')
     cy.get('select[id="country"]').should('have.value', '99')
       
    })


})