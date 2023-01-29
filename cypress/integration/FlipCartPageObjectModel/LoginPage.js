class LoginPage {


    enterEmailId(username){
        cy.get('[id=Email]').clear()
        cy.get('[id=Email]').type(username);
        return this
    }

    enterPassword(pswd) {
        cy.get('[id=Password]')
            .clear()
            .type(pswd)
       //return this
    }

    submit() {
        cy.get('[type=submit]').click()
    }

}	
export default LoginPage