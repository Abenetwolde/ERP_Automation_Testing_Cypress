import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.js"
import { Validator } from "../../Helpers/Validator.js";
import { ErrorInputValidator } from "../../Helpers/ErrorInputValidator.js";
const testData = require('../../fixtures/Recruitment/assessmentWeight.json');

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


    testData.assessmentWeight.forEach((data, i) => {
        it(` ${data.testName}`, () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/recruitment/assessmentWeight.xhtml")
            // click vacancy number
            cy.get('[id="frmExamPercentage:bcMain_label"]').click()
            // enter request id  
            cy.get(`[data-label="vac-IT-0001"]`).click({ force: true })
            cy.wait(500)
            //type Written Exam
            cy.get('[id="frmExamPercentage:txtWrittenPercentage"]').clear().type(data.WrittenExam)
            // type InterviewPercentage 
            cy.get('[id="frmExamPercentage:txtInterviewPercentage"]').clear().type(data.InterviewPercentage)
            // type CgpaPercentage
            cy.get('[id="frmExamPercentage:txtCgpaPercentage"]').clear().type(data.CgpaPercentage)
            // type ExperiencePercentage
            cy.get('[id="frmExamPercentage:txtExperiencePercentage"]').clear().type(data.ExperiencePercentage)
            // type PracticalPercentage
            cy.get('[id="frmExamPercentage:txtPracticalPercentage"]').clear().type(data.PracticalPercentage)
            // type OtherPercentage
            cy.get('[id="frmExamPercentage:txtOtherPercentage"]').clear().type(data.OtherPercentage)
            // type txtpreparedOn

            cy.get('[id="frmExamPercentage:txtpreparedOn"]').clear().type(data.txtpreparedOn)
            cy.get('[id="frmExamPercentage:btnSave"]').click()
            if (data.testType == "validator") {
                Validator(data)
            } else {
                cy.get('span.ui-message-error-detail').contains("have.text", "Validation failed")
            }





        })
    })


})

