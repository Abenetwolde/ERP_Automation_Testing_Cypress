import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
const testData = require('../../fixtures/HrPlaining/needRequest.json');

console.log(testData.url)
describe('PayGradeTest', () => {
    testData.needRequest.forEach((data, i) => {
        it(`test data ${data.testName}`, () => {
            cy.loginCommand(testData.url, 'hiwot', 1234);
            // cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/planning/needRequest.xhtml")
            cy.wait(500)
            cy.get('[id="frmSample:j_idt76"]').click()
            cy.wait(500)
            cy.get('[id="frmNeedRequest:somYear"]').click()
            cy.wait(500)
            cy.get(`li[data-label="${data.year}"]`).eq(0).click({force: true});
            cy.wait(500)
            cy.get('[id="frmNeedRequest:btnTree"]').click()
            cy.wait(500)
            cy.contains('span.ui-treenode-label.ui-corner-all', '1--INSA').click()
            cy.wait(500)
            cy.get('a.ui-dialog-titlebar-close span.ui-icon').click()
            cy.wait(500)
            cy.get('[id="frmNeedRequest:sonJob"]').click()
            cy.wait(500)
            cy.get('[data-label="Administrative Assistant II"] ').eq(0).click({force: true})
            cy.wait(500)
            cy.get('[name="frmNeedRequest:txtNoOfPosition"]').click()
            cy.wait(500)
            cy.get('[name="frmNeedRequest:txtNoOfPosition"]').clear().type(data.NoofEmpNeeded)
            cy.wait(500)
            cy.get('[id="frmNeedRequest:txtHowtobefilled"]').click()
            cy.wait(500)
            cy.get('[data-label="Internal Recruitment"]').click()
            cy.wait(500)
            cy.get('[id="frmNeedRequest:txtWhentobefilled"]').click()
            cy.wait(500)
            cy.get('[data-label="January"]').click()
            cy.wait(500)
            cy.get('[id="frmNeedRequest:txtReasonForRequest"]').type(`${data.reasonforRequest}`)
            cy.wait(500)
            cy.get('[id="frmNeedRequest:txtPosition"]').type(data.NoofPosition)
            cy.wait(500)
            cy.get('[id="frmNeedRequest:btnAdd"]').click()
           if(data.testId==2){
            Validator(data)
           }
            cy.get('[id="frmNeedRequest:txtxreqdate"]').type(data.PreparedOn)
            cy.get('[id="frmNeedRequest:btnSave"]').click()
            Validator(data)
            
        })
    })
}
)




