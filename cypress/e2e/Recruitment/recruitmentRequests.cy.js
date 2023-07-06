import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.js"
import { Validator } from "../../Helpers/Validator.js";
const testData = require('../../fixtures/Recruitment/recruitmentRequests.json');

console.log(testData.url)
describe('SeveranceLiability testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand(testData.url, 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })


    testData.recruitmentRequests.forEach((data, i) => {
        it(` ${data.testName}`, () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/recruitment/recruitmentRequests.xhtml")
            // click the plus icon
            cy.get('[id="frmSample:btnNew"]').click()
            // enter request id  
            cy.get('[id="frmRecruitment:txtRequester_input"]').type(123)
            cy.wait(1000)
            cy.get('tbody tr').first().click({ force: true })
            // click job title dropdown 
            cy.get('[id="frmRecruitment:txtJob"]').click()
               // select job title 
            cy.get('[data-label="Administrative Assistant II"]').click({ force: true })
            // validate the table  
            cy.get('table[role="grid"] tbody tr').should('have.length', 2)

            // type middle name 
            cy.get('[id="frmRecruitment:txtNoOfEmployee"]').type(1)
            // save button
            cy.get('[id="frmRecruitment:btnSave"]').click()
            // cy.get('[id="frmCandidate:txtLastName"]').type(data.lastName)
            // // click Nationality dropdown 
            // cy.get('[id="frmCandidate:txtNationality_label"]').click()
            // // select Nationality 
            // cy.get('[data-label="Ethiopian"]').click()
            // // click Address Button

            // {
            //     data.testId == 2 && 
            //     cy.get('[id="frmCandidate:btnResidentialAddress "]').click()
            //     // select Address 
            //     cy.get('[id="frmCandidate:addressTree:60:nodetxt"]').click({force: true})
            //     //close icon
            //     cy.get('span.ui-icon.ui-icon-closethick').click({force: true})
            // }
            // // // type Phone number}
            // cy.get('[id="frmCandidate:txtDateOfBirth"]').type(data.dateOfBirth)
            // // type phone number 
            // cy.get('[id="frmCandidate:txtMobileNo"]').type(data.MoblePhone)
            // // click save button
            // cy.get('[id="frmCandidate:btnSave"]').click()
            // cy.wait(2000)

            // ////validate tests
            Validator(data)




        })
    })


})

