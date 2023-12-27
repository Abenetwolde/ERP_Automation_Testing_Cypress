import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
const testData = require('../../fixtures/HrPlaining/demandAndSupplyAnalysis.json');

describe('leaveApproveDep test', () => {

        it(`leaveApproveDep test `, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/leave/leaveApproveDep.xhtml", 'dagnachew', 1234);

            cy.wait(1000)
            cy.get('[id="frmSample:cmdLinkNotf"]').click()
            cy.wait(500)
            cy.get('.ui-selectlistbox-list > :nth-child(2)').click()
            // cy.get('[data-item-label="8011"]').click()
     
            cy.wait(1000)
            cy.get('[id="frmDeptApproval:txtStatus_label"]').click()
            cy.wait(1000)
            cy.get(`li[data-label="Approve"]`).click({force: true} );
         
            cy.wait(500)
          
            cy.get('[id="frmDeptApproval:btnSavea"]').click()
            cy.wait(500)
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        })
       
    })




