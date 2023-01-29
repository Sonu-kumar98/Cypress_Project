describe('My alert pop test suite', function(){
    it('Alert pop related test cases', function(){
// Navigate to this URl
cy.visit("http://qaclickacademy.com/practice.php")
// Cypress have freedom to handle all alert automatically 
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
// Get text value of alert pop message in cypress
cy.on('window:alert',(str)=>{
    // Mocha provided some asseration it's similar like as a testNg
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
// In cypress have not authroty to handle all parent and child window
cy.get('#opentab').invoke('removeAttr','target').click()
// Verify current url website as a substring formate
cy.url().should('include','rahulshettyacademy')
// Back to pervious screen of automation
cy.go('back')
    })
})