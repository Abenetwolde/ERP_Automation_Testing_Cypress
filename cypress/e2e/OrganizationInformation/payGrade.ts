import Login from "../../PageObjects/LoginPage.js"
const testData = require('../../fixtures/OrganizationInformation/payGrade.json');

console.log(testData.url)
describe('PayGradeTest', () => {
    beforeEach(() => {
        cy.get('body').then(($body) => {
            if ($body.text().includes('hiwot')) {
                return;
            } else {
                const loginObject = new Login()
                cy.visit(`${testData.url}`)
                loginObject.setUserName("hiwot")
                loginObject.setPassword(1234)
                loginObject.clickLogin();
            }
        });

    })
  

    testData.payGradeData.forEach((data, i) => {
        it(`test datat ${data.testName}`, () => {

            cy.get('[id="formPayGrade:drdGrade_label"]').click()
            cy.wait(1000)
            cy.get(`li[data-label=${data.salaryGrade}]`).click();
            cy.wait(1000)
            cy.get('[id="formPayGrade:txtSalaryStep_label"]').click()
            cy.wait(1000)
            cy.get(`[data-label=${data.salaryStep}]`).click({force:true})
           
            cy.wait(1000)
            cy.get('[id="formPayGrade:txtSalary"]').type(data.salary)
            cy.wait(1000)

            cy.get('[id="formPayGrade:btnAdd"]').click()
            cy.wait(1000)
            cy.get('[id="formPayGrade:btnSave"]').click()
            cy.wait(1000)
           if(data.testId==2) cy.get('[id="formPayGrade:btnSave"]').click()
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', data.expectedResult.mainText)

        })
    })
}
)








