import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
const testData = require('../../fixtures/HrPlaining/demandAndSupplyAnalysis.json');

console.log(testData.url)
describe('PayGradeTest', () => {
    // beforeEach(() => {
    //     cy.session("JSESSIONID", () => {
    //         // Check if the "JSESSIONID" cookie is present
    //         cy.getCookie("JSESSIONID").then((cookie) => {
    //             // If the cookie is not present, log in
    //             if (!cookie) {
    //                 cy.loginCommand(testData.url, 'dagnachew', 1234);
    //                 //reusable login command
    //             }

    //         })
    //     });
    // })

   
    testData.demandAndSupplyAnalysis.forEach((data: { testName: any; year: any; Department: any; remark: any; PreparedOn: string; }, i: any) => {
        it(`test data ${data.testName}`, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/planning/annualRecruitmentAndPromotion.xhtml", 'dagnachew', 1234);
            // cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/planning/annualRecruitmentAndPromotion.xhtml")
            cy.wait(1000)
            // click the Year dropdown
            cy.get('[id="frmAnnualPlan:somYear_label"]').click()
            cy.wait(1000)
            // select year
            cy.get(`li[data-label="${data.year}"]`).eq(0).click({force: true});
            cy.wait(500)
            // clickDepartment dropdown
             cy.get('[id="frmAnnualPlan:txtDirectorate_label"]').click()
             cy.wait(500)
            // Select Department
             cy.get(`li[data-label="${data.Department}"]`).eq(0).click({force: true});
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




