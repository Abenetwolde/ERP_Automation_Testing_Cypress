import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
import { Validator } from "../../Helpers/Validator.js";
import { ErrorInputValidator } from "../../Helpers/ErrorInputValidator.js";
const testData = require('../../fixtures/Recruitment/assessmentWeight.json');

console.log(testData.url)
describe('recruitmentRequests testing ', () => {

    testData.assessmentWeight.forEach((data: { testName: any; WrittenExam: string; InterviewPercentage: string; CgpaPercentage: string; ExperiencePercentage: string; PracticalPercentage: string; OtherPercentage: string; txtpreparedOn: string; testType: string; }, i: any) => {
        it(` ${data.testName}`, () => {
            cy.loginCommand(testData.url, 'hiwot', 1234);
            // click vacancy number
            cy.get('[id="frmExamPercentage:bcMain_label"]').click()
            // enter request id  
            cy.get(`[data-label="vac-IT-0001"]`).click({ force: true })
            cy.wait(1000)
            //type Written Exam
            cy.get('[id="frmExamPercentage:txtWrittenPercentage"]').clear().type(data.WrittenExam)
            cy.wait(1000)
            // type InterviewPercentage 
            cy.get('[id="frmExamPercentage:txtInterviewPercentage"]').clear().type(data.InterviewPercentage)
            cy.wait(1000)
            // type CgpaPercentage
            cy.get('[id="frmExamPercentage:txtCgpaPercentage"]').clear().type(data.CgpaPercentage)
            cy.wait(1000)
            // type ExperiencePercentage
            cy.get('[id="frmExamPercentage:txtExperiencePercentage"]').clear().type(data.ExperiencePercentage)
            cy.wait(1000)
            // type PracticalPercentage
            cy.get('[id="frmExamPercentage:txtPracticalPercentage"]').clear().type(data.PracticalPercentage)
            cy.wait(1000)
            // type OtherPercentage
            cy.get('[id="frmExamPercentage:txtOtherPercentage"]').clear().type(data.OtherPercentage)
            cy.wait(1000)
            // type txtpreparedOn

            cy.get('[id="frmExamPercentage:txtpreparedOn"]').clear().type(data.txtpreparedOn)
            cy.wait(1000)
            cy.get('[id="frmExamPercentage:btnSave"]').click()
            if (data.testType == "validator") {
                Validator(data)
            } else {
                cy.get('span.ui-message-error-detail').contains("Validation failed")
            }





        })
    })


})

