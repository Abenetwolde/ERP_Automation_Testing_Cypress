import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.js"
import { Validator } from "../../Helpers/Validator.js";
import { ErrorInputValidator } from "../../Helpers/ErrorInputValidator.js";
// const testData = require('../../fixtures/Recruitment/shortlistCandidates.json');

console.log(testData.url)
describe('recruitmentRequests testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/recruitment/shortlistCandidates.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })


    // testData.shortlistCandidates.forEach((data, i) => {
        it(" ${data.testName}`", () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/recruitment/shortlistCandidates.xhtml")
            // click vacancy number
            cy.get('[id="frmExamPercentage:bcMain_label"]').click()
            // enter request id  
            cy.get(`[data-label="vac-IT-0001"]`).click({ force: true })
            cy.wait(500)
            cy.get('[id="frmExamPercentage:txtWrittenPercentage"]').clear().type(data.updateData)
            // cy.get('tbody tr').first().click()
          
            cy.get('[id="frmExamPercentage:btnSave"]').click()
            if(data.testType=="validator")
            {
                Validator(data)
            }else{
                cy.get('span.ui-message-error-detail').contains("have.text","Validation failed") 
            }
            




        })
    })


// })

