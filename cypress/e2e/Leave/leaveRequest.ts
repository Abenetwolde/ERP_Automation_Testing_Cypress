import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
const testData = require('../../fixtures/HrPlaining/demandAndSupplyAnalysis.json');

console.log(testData.url)
describe('leaveRequest test', () => {

        it.skip(`leaveRequest test `, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/leave/leaveRequest.xhtml", 'hiwot', 1234);

            cy.wait(1000)
            cy.get('[id="frmLeaveReq:txtEmpID"]').type("8011")
            cy.wait(500)
            cy.get('.ui-autocomplete-item > :nth-child(2)').click()
            // cy.get('[data-item-label="8011"]').click()
     
            cy.wait(1000)
            cy.get('[id="frmLeaveReq:menuLeaveType_label"]').click()
            cy.wait(1000)
            cy.get(`li[data-label="EMERGENCY"]`).click({force: true} );
         
       
          
            cy.get('[id="frmLeaveReq:btnSave1"]').click()
            cy.wait(500)
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        })
        it(`leaveRequest with required field test `, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/leave/leaveRequest.xhtml", 'hiwot', 1234);

            cy.wait(1000)
            cy.get('[id="frmLeaveReq:txtEmpID"]').type("8011")
            cy.wait(500)
            cy.get('.ui-autocomplete-item > :nth-child(2)').click()
            // cy.get('[data-item-label="8011"]').click()
     
            cy.wait(1000)
            cy.get('[id="frmLeaveReq:menuLeaveType_label"]').click()
            cy.wait(1000)
            cy.get(`li[data-label="EMERGENCY"]`).click({force: true} );
         
       
          
            cy.get('[id="frmLeaveReq:btnSave1"]').click()
            cy.wait(500)
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        })
    })




