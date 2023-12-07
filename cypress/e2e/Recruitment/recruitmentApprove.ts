import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
import { TableValidator, Validator } from "../../Helpers/Validator.js";
import { ErrorInputValidator } from "../../Helpers/ErrorInputValidator.js";
const testData = require('../../fixtures/Recruitment/recruitmentApprove.json');

console.log(testData.url)
describe('recruitmentRequests testing ', () => {
    testData.recruitmentApproveFilterCriteria.forEach((data, i) => {
        it.skip(` ${data.testName}`, () => {
            cy.loginCommand(testData.url, 'dagnachew', 1234);
            // click Filter Criteria 
            cy.get('[id="frmRecruitment:somFiliterByStatus_label"]').click()
            // enter Criteria
            cy.get(`[data-label="Load request list"]`).click()
            cy.wait(1000)

            // validate the number of row of the table 
            TableValidator(
                '[id="frmRecruitment:tblRequestList_data"] tr',
                 1,
                'be.gte'
            )    
        })

    })

    testData.recruitmentApprove.forEach((data: { testName: any; vacancy_num: string; NoOfEmployeesApproved: string; Decision: any; testType: string; }, i: any) => {
        it(` ${data.testName}`, () => {
            cy.loginCommand('https://172.21.35.239:8181/ERP-war/erp/hrms/recruitment/recruitmentApprove.xhtml', 'dagnachew', 1234);
            // click Filter Criteria 
            // cy.wait(1000)
            // cy.get('[id="frmRecruitment:somFiliterByStatus_label"]').click()
            // // enter Criteria
            // cy.get(`[data-label="Load request list"]`).click()
            cy.wait(1000)
            // click the first row
            cy.get('[id="frmRecruitment:tblRequestList_data"] tr').first().click();
            //input Vacancy number 
            cy.wait(500)
            cy.get('[id="frmRecruitment:txtBatchofCode"]').type(data.vacancy_num)
            // input NoOfEmployeesApproved number
            cy.wait(500)
            cy.get('[id="frmRecruitment:txtApprovedEmployee"]').type(data.NoOfEmployeesApproved)
            cy.wait(500)
// click Decision 
            cy.get('[id="frmRecruitment:txtDecsion"]').click()
            cy.wait(500)
            // slelect Decision 
            cy.get(`[data-label="${data.Decision}"]`).click()
            cy.wait(500)
            cy.get('[id="frmRecruitment:btnSave"]').click()
            cy.wait(2000)
            if(data.testType=="validator")
            {
                Validator(data)
            }else{
                ErrorInputValidator(data)
            }

  
        })

    })
})

