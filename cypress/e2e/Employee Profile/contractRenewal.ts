import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
const testData = require('../../fixtures/HrPlaining/demandAndSupplyAnalysis.json');

console.log(testData.url)
describe('contractRenewal update test', () => {

    it(`contractRenewal update test `, () => {
        cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/employee/contractRenewal.xhtml", 'dagnachew', 1234);

        cy.wait(1000)
        //search by
        cy.get('[id="formContrat:drdSearchBy_label"]').click()
        cy.wait(500)
        cy.get(`li[data-label="account no"]`).click();
        cy.wait(500)
        // search by book number
        cy.get('[id="formContrat:txtempColval"]').type("1000")
        cy.wait(500)
        cy.get('[id="formContrat:btnSearch"]').click()
        cy.wait(1000)
        cy.get('table[role="grid"] tbody tr').contains('td', '1').click({force: true} )
        cy.wait(500)
        //start date
        cy.get('[id="formContrat:txtfromdate"]').clear().type("18/04/2016")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
        //end date
        cy.get('[id="formContrat:txttodate"]').clear().type("18/10/2016")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
    
        cy.get('[id="formContrat:btnSave"]').click()
        cy.wait(500)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

    })
})




