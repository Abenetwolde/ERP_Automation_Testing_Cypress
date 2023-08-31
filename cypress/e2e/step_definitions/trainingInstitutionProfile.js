
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
  // beforeEach(() => {
  
  //   cy.session("JSESSIONID", () => {
  //         // Check if the "JSESSIONID" cookie is present
  //         cy.getCookie("JSESSIONID1").then((cookie) => {
  //             // If the cookie is not present, log in
  //             if (!cookie) {
  //               cy.wait(2000)
  //                 cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/trainingInstitutionProfile.xhtml", 'hiwot', 1234);
  //                 //reusable login command
  //             }
       
  //         })
  //     });
    
  // });
  
  
  Given('I am on the trainingInstitutionProfile page', () => {
    cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/trainingInstitutionProfile.xhtml");
   });
   When('I select Institution Name', () => {
    // cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/trainingCourse.xhtml");
    cy.get('[id="frmTrainer:srcInstName_label"]').click();
    cy.wait(1000)
     cy.get('[data-label="BahiDar University"]').click();
     cy.wait(1000)
   });
   When('I click Institution from the table', () => {
    cy.get('table tbody tr').contains('td', 'BahiDar University').click();
  
   });
   When('I update Tin Number value', () => {
    // Check if the form is valid before submitting it
    cy.get('[id="frmTrainer:txtTinNumber"]').clear().type("122552");
   });
   When('I Click the update Button', () => {
    // Check if the form is valid before submitting it
    cy.get('[id="frmTrainer:btnSave"]').click()
   });
   When('I Click the Uupdate Button', () => {
    // Check if the form is valid before submitting it
    cy.get('[id="frmTrainer:btnSave"]').click()
   });
 
 
   Then('The error message visibl', () => {
    cy.get('.ui-growl-message').should('not.be.visible')
   });
   Then('I should see the seccessfuly Message on top', () => {
    cy.wait(1000)
    cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")
   });

  //  });