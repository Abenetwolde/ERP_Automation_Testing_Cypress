
import {
  Given,
  When,
  Then,
  
} from "@badeball/cypress-cucumber-preprocessor";

// import {
//   Given,
//   When,
//   And,
//   Then

// } from "@badeball/cypress-cucumber-preprocessor";
import "../../support/auth.js"
beforeEach(() => {

  cy.session("JSESSIONID", () => {
        // Check if the "JSESSIONID" cookie is present
        cy.getCookie("JSESSIONID").then((cookie) => {
            // If the cookie is not present, log in
            if (!cookie) {
              cy.wait(2000)
                cy.loginCommand("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml", 'hiwot', 1234);
                //reusable login command
            }
     
        })
    });
  
});


Given('I am on the trainingCourse page', () => {
  cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/trainingCourse.xhtml");
 });
 When('I select Course Category', () => {
  // cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/trainingCourse.xhtml");
  cy.get('[id="frmCourse:txtSrchName"]').click();
  cy.wait(1000)
   cy.get('[data-label="Electrical"]').click();
   cy.wait(1000)
 });
 When('I click Course Category from the table', () => {
  cy.get('table tbody tr').contains('td', 'IT Officer').click();

 });
 When('I update Course Name value', () => {
  // Check if the form is valid before submitting it
  cy.get('[id="frmCourse:txtDescripition"]').clear().type("update discription");
 });
 When('I Click the save Button', () => {
  // Check if the form is valid before submitting it
  cy.get('[id="frmCourse:btnSave"]').click()
 });
 Then('I should see the seccessfuly update pop up Message on top', () => {
  cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")
 });
 //  Then('I should see the seccessfuly update pop up Message on top', () => {
//   cy.get('body').then(($body) => {
//     ($body.text().includes('hiwot'))

// })
//  });