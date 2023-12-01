import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
const testData = require('../../fixtures/HrPlaining/annualRecruitmentAndPromotion.json');

console.log(testData.url)
describe('PayGradeTest', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand(testData.url, 'dagnachew', 1234);
                    //reusable login command
                }

            })
        });
    })

   
    testData.annualRecruitmentAndPromotion.forEach((data, i) => {
        it(`test data ${data.testName}`, () => {
            cy.loginCommand(testData.url, 'dagnachew', 1234);
            cy.wait(500)
            // click the Year dropdown
            cy.get('[id="frmNeedRequest:txtYear_label"]').click()
            cy.wait(500)
            // select year
            cy.get(`li[data-label="${data.year}"]`).eq(0).click({force: true});
            cy.wait(500)
            // clickDepartment dropdown
             cy.get('[id="frmNeedRequest:txtDirectorate_label"]').click()
             cy.wait(500)
            // Select Department
             cy.get(`li[data-label="${data.Department}"]`).eq(0).click({force: true});
             cy.wait(500)
             // type Prepard on
             cy.get('[id="frmNeedRequest:txtxreqdate"]').type(data.PreparedOn)
             cy.wait(500)
             cy.get('[id="frmNeedRequest:btnSave"]').click()
             Validator(data)
            
        })
    })
}
)




