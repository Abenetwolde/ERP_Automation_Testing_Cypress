import Login from "../../PageObjects/LoginPage.js"
// import "../../support/auth.js"
import "../../support/auth.d.ts"
import { Validator } from "../../Helpers/Validator.js";
import { ErrorInputValidator } from "../../Helpers/ErrorInputValidator.js";
const testData = require('../../fixtures/Recruitment/recruitmentRequests.json');

console.log(testData.url)
describe('recruitmentRequests testing ', () => {



    testData.recruitmentRequests.forEach((data, i) => {
        it(` ${data.testName}`, () => {
            cy.loginCommand(testData.url, 'hiwot', 1234);
            // click the plus icon
            cy.get('[id="frmSample:btnNew"]').click()
            // enter request id  
            cy.wait(1000)
            cy.get('[id="frmRecruitment:txtRequester_input"]').type(`${data.Requester_id}`)
            cy.wait(4000)
            cy.get('[data-item-value="123"]').click()
            cy.wait(500)
            cy.get('[id="frmRecruitment:txtJob"]').click({ force: true })
            // click job title dropdown 
            cy.get('[id="frmRecruitment:txtJob"]').click()
            cy.wait(500)
  
            cy.get(`[data-label="${data.jobTitle}"]`).click({ force: true })
            //type Number of employees requested
            cy.wait(1000)
            if (data.testId !== 2) { cy.get('[id="frmRecruitment:txtNoOfEmployee"]').type(`${data.txtNoOfEmployee}`) }
            cy.wait(500)
            // save Data
            cy.get('[id="frmRecruitment:btnSave"]').click()
            cy.wait(500)
            if (data.testType == "validator") {
                Validator(data)
            } else {
                ErrorInputValidator(data)
            }





        })
    })


})

