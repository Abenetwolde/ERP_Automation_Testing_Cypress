
import "../../support/auth.d.ts"

describe('leaveSchedule test', () => {

        it(`leaveSchedule test `, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/leave/leaveSchedule.xhtml", 'hiwot', 1234);

            cy.wait(1000)
            cy.get('[id="frmLeaveSchedule:requester_input"]').type("8011")
            cy.wait(2000)
            cy.get('.ui-autocomplete-item > :nth-child(1)').click()
            // cy.get('[data-item-label="8011"]').click()
     
            cy.wait(500)
            cy.get('[id="frmLeaveSchedule:txtYear_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="2015-2016"]`).click({force: true} );
         
            cy.wait(500)
            cy.wait(500)
            cy.get('[id="frmLeaveSchedule:drlmonths_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="September"]`).click({force: true} );
         
            cy.wait(500)
            cy.get('[id="frmLeaveSchedule:btnAddDetail"]').click()
          
            cy.get('[id="frmLeaveSchedule:btnMainSave"]').click()
            cy.wait(500)
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        })
        it(`register with duplication should be fail test `, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/leave/leaveSchedule.xhtml", 'hiwot', 1234);

            cy.wait(1000)
            cy.get('[id="frmLeaveSchedule:requester_input"]').type("8011")
            cy.wait(2000)
            cy.get('.ui-autocomplete-item > :nth-child(1)').click()
            // cy.get('[data-item-label="8011"]').click()
     
            cy.wait(500)
            cy.get('[id="frmLeaveSchedule:txtYear_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="2015-2016"]`).click({force: true} );
         
            cy.wait(500)
            cy.wait(500)
            cy.get('[id="frmLeaveSchedule:drlmonths_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="September"]`).click({force: true} );
         
            cy.wait(500)
            cy.get('[id="frmLeaveSchedule:btnAddDetail"]').click()
          
            cy.get('[id="frmLeaveSchedule:btnMainSave"]').click()
            cy.wait(500)
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Error!")/* .should('contain', "The number 0f employee must equal with participant!") */

        })
    })




