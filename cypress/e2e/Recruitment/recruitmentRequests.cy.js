import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.js"
import { Validator } from "../../Helpers/Validator.js";
import { ErrorInputValidator } from "../../Helpers/ErrorInputValidator.js";
const testData = require('../../fixtures/Recruitment/recruitmentRequests.json');

console.log(testData.url)
describe('recruitmentRequests testing ', () => {
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
            cy.get('[id="frmRecruitment:txtRequester_input"]').type(`${data.Requester_id}`)
            cy.wait(1000)
            cy.get(`[data-item-value="${data.Requester_id}"]`).click()
            cy.wait(500)
            cy.get('[id="frmRecruitment:txtJob"]').click({force: true})
            // cy.get('tbody tr').first().click()
          
            // click job title dropdown 
            cy.get('[id="frmRecruitment:txtJob"]').click()
               // select job title 
            cy.get(`[data-label="${data.jobTitle}"]`).click({ force: true })
            //type Number of employees requested
          if(data.testId!==2){cy.get('[id="frmRecruitment:txtNoOfEmployee"]').type(data.txtNoOfEmployee)}  
            cy.wait(500)
            // save Data
             cy.get('[id="frmRecruitment:btnSave"]').click()
         
            if(data.testType=="validator")
            {
                Validator(data)
            }else{
                ErrorInputValidator(data)
            }
            




        })
    })


})

