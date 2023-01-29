class HomePage{

    getEditNametext(){
        return cy.get(':nth-child(1) > .form-control')
    }

    getTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    selectGenderName(){
        return cy.get("select")
    }

    getEntrepreneurRadioButton(){
        return cy.get('#inlineRadio3')
    }

    clickOnShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }

}

// with the help of export key javascript make sure 
// this class available for framework
export default HomePage