import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
const testData = require('../../fixtures/HrPlaining/demandAndSupplyAnalysis.json');

console.log(testData.url)
describe('leaveSetting test', () => {

        it(`leaveSetting test `, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/leave/leaveSetting.xhtml", 'hiwot', 1234);

            cy.wait(1000)
            //leave type
            cy.get('[id="frmLeaveSetting:txtLeaveType_label"]').click()
    
            cy.wait(500)
            cy.get(`li[data-label="ANUAL"]`).click();
         
       
          
            cy.get('[id="frmLeaveSetting:btnSavea"]').click()
            cy.wait(500)
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        })
    })




