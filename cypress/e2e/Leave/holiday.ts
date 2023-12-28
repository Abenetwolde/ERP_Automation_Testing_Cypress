import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
const testData = require('../../fixtures/HrPlaining/demandAndSupplyAnalysis.json');

describe('Holyday registration test', () => {

        it(`Holyday registration test `, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/leave/holiday.xhtml", 'hiwot', 1234);

            cy.wait(1000)
            cy.get('[id="frmHoliday:somBudgetYear_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="2031-2032"]`).click({force: true} );
            cy.wait(500)
            cy.get('[id="frmHoliday:txtHolidayNames_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="ENKUTATASH"]`).click({force: true} );
            cy.wait(500)
            cy.get('[id="frmHoliday:txtHoliday"]').type("11/01/2013")
            cy.wait(500)
            cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()

            cy.get('[id="frmHoliday:btnSave"]').click()
            cy.wait(500)

            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        })
       
    })




