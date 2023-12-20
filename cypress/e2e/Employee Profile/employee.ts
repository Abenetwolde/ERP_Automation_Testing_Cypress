import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
const testData = require('../../fixtures/HrPlaining/demandAndSupplyAnalysis.json');

console.log(testData.url)
describe('PayGradeTest', () => {
    testData.demandAndSupplyAnalysis.forEach((data: { testName: any; year: any; Department: any; remark: any; PreparedOn: string; }, i: any) => {
        it(`test data ${data.testName}`, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/employee/employee.xhtml", 'hiwot', 1234);

            cy.wait(1000)
            // txtEmployeeId
            cy.get('[id="frmEmployee:txtEmployeeId"]').type("8011")
            cy.wait(1000)
            // title
            cy.get('[id="frmEmployee:somEmpTitle_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="Ato"]`).eq(0).click();
            // name
            cy.get('[id="frmEmployee:txtFirstName"]').type("TestName")
            cy.wait(500)
            // mname
            cy.get('[id="frmEmployee:txtMiddleName"]').type("TestMiddleName")
            cy.wait(500)
             // name
             cy.get('[id="frmEmployee:txtDateOfBirth"]').type("09/04/1996")
             cy.wait(500)
            // name
            cy.get('[id="frmEmployee:txtHireDate"]').type("09/04/2016")
            cy.wait(500)
            //somMaritalStats
            cy.get('[id="frmEmployee:somMaritalStatus_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="Ato"]`).eq(0).click();
            // clickDepartment dropdown
            cy.get('[id="frmAnnualPlan:txtDirectorate_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="Ato"]`).eq(0).click();
            cy.wait(500)
            // type txtRemark
            cy.get('[id="frmAnnualPlan:txtRemark"]').type(`"${data.remark}"`)
            // type Prepard on
            cy.get('[id="frmAnnualPlan:txtxreqdate"]').type(data.PreparedOn)
            cy.wait(500)
            cy.get('[id="frmAnnualPlan:btnSave"]').click()
            Validator(data)

        })
    })
}
)




