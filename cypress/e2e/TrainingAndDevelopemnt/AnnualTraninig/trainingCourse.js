
import { Before,Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import "../../support/auth.js"
beforeEach(() => {
  // cy.visit('https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml');
  cy.session("JSESSIONID", () => {
        // Check if the "JSESSIONID" cookie is present
        cy.getCookie("JSESSIONID").then((cookie) => {
            // If the cookie is not present, log in
            if (!cookie) {
              cy.wait(2000)
                cy.loginCommand("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml", 'safdsf', 1234);
                //reusable login command
            }
    
        })
    });
  
});

Given("I am on TrainingAndDevelopemnt/AnnualTraninig trainingCourse page", () => {
  cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml");
});
When('I Click the plus Icon ', () => {
  cy.wait(2000)
  cy.get('[id="loginform:login-username"]').type(username);
});

And('I Select Course Category From Dropdown ', () => {
    cy.wait(2000)
    cy.get('[id="loginform:login-username"]').type(username);
  });
  And('I Fill Course Name  ', () => {
    cy.wait(2000)
    cy.get('[id="loginform:login-username"]').type(username);
  });
  
When('I Click the save Button', () => {
  cy.get('[id="loginform:login-password"]').type(password);
});


Then("I should see a success Message", () => {
  cy.get('body').then(($body) => {
    ($body.text().includes('hiwot'))

}
);
});

