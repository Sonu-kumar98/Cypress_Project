/// <reference types="cypress"/>
import * as _ from '@types/lodash';
const { get } = require("cypress/types/lodash");

describe('myTestSuite', () => {

    it('Verify tittle of the page', () => {

    // cy pre defind object in cypress
    cy.visit('https://www.flipkart.com/') 
    // open the URL
    cy.get("._1_3w1N").click();
    //cy.get("body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(1) > input").type("9818314282")
   // cy.get("body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(2) > input").type("Noida@18")


    })

  })