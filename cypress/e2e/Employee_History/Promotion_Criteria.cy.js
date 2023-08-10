import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.js"
const testData = require('../../fixtures/Employee_History/Promotion_Criteria.json');

console.log(testData.url)
describe('PayGradeTest', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand(testData.url, 'Hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })

   
    testData.Promotion_Criteria.forEach((data, i) => {
        it(`test data ${data.testId}`, () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/promotion/promotionCriteria.xhtml")
            cy.wait(500)
            // click Performance
            cy.get(`li[data-label=${data.PromotionCriteria}]`).eq(0).click({force: true});
            cy.wait(500)
            // Type weight
            if(data.testId!==2)
            {cy.get('[id="frmPromotionCriteria:txtWeight"]').type(data.Weight)}
            //save
            cy.get('[id="frmPromotionCriteria:btnSave"]').click()
             Validator(data)
            
        })
    })
}
)




