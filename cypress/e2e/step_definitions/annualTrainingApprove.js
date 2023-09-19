
import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  import "../../support/auth.js" 
  Given('I am on the annualTrainingApprove page', () => {
    cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/annualTrainingApprove.xhtml");
   });
   When('I select annualTrainingApprove List Filter Criteria', () => {
    // cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/trainingCourse.xhtml");
    cy.get('[id="frmAnnualNeedRequest:txtSrchYear_label"]').click();
    cy.wait(1000)
     cy.get('[data-label="Load Request List"]').click();
     cy.wait(1000)
   });
   When('I click department from the table', () => {
    cy.get('table tbody tr').contains('td', 'BIFTU').click();
  
   });
   When('I Update Decision to Approve:', () => {
    cy.get('[id="frmAnnualNeedRequest:drdCatagory_label"]').click()
    cy.wait(1000)
    cy.get('[data-label="Electrical"]').click();
   });
   When('I Given Comment', () => {
    cy.get('[id="frmAnnualNeedRequest:txtnoOfNominee"]').clear().type(10);
   });
   When('I Click the save button', () => {
    cy.get('[id="frmAnnualNeedRequest:txtnoOfDays"]').clear().type(5);
   });

   When('it should show the new data on the table', () => {
    cy.get('[id="frmAnnualNeedRequest:txtsponsoredBy"]').clear().type("sponser name");
   });
   When('I select Location', () => {
    cy.get('[id="frmAnnualNeedRequest:txtlocationType:1"]').click({force:true})
   });
   When('I select Training Course', () => {
    cy.get('[id="frmAnnualNeedRequest:drdCourse_label"]').click()
    cy.wait(1000)
    cy.get('[data-label="IT Officer"]').click();
   });
   When('I select Institution', () => {
    cy.get('[id="frmAnnualNeedRequest:drdInstitution_label"]').click()
    cy.wait(1000)
    cy.get('[data-label="BahiDar University"]').click();
   });
   When('I type reason', () => {
    cy.get('[id="frmAnnualNeedRequest:txtSource"]').type("reason")
   });
   When('I Click the add button', () => {
    // Check if the form is valid before submitting it
    cy.get('[id="frmAnnualNeedRequest:btnAdd"]').click()
   });
   Then('it should show the new data on the table', () => {
    cy.get('table tbody tr').contains('td', 'IT Officer').should('be.visible')
   });
   When('I type Participant id', () => {
    cy.get('[id="frmAnnualNeedRequest:txtEmployeeID_input"]').clear().type("123");
    cy.wait(1000)
    cy.get('[data-item-value="123"]').click()
   });
   When('I click Add Training Participant Button', () => {
    cy.get('[id="frmAnnualNeedRequest:btnAddEmp"]').click()
   });
   Then('I should see the new data on Training Participant table', () => {
    cy.get('table tbody tr td:nth-child(3)').should('contain', '123').and('be.visible');

    // cy.get('table tbody tr').contains('td', '123').should('be.visible')
   });
   When('I type Comment Given', () => {
    cy.get('[id="frmAnnualNeedRequest:txtComment"]').clear().type("comment");
   });
   When('I Click Update Button', () => {
    cy.get('[id="frmAnnualNeedRequest:btnSave"]').click()
   });
   Then('I should see the seccessfuly Message on top', () => {
    cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")
   });
 