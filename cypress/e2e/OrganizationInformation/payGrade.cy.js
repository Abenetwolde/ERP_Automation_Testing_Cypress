import Login from "../../PageObjects/LoginPage.js"
const testData = require('../../fixtures/payGrade.json');

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
        // cy.fixture('PayGrade').then(data => {
        //     testData = data.payGradeData;
        // });

        // beforeEach(() => {
        //     JSON.stringify(testData);
        // });

    })

      testData.payGradeData.forEach((data,i) => {
            it(`test datat ${data.testName}`, () => {
               
             cy.get('[id="formPayGrade:drdGrade_label"]').click()
             cy.get(`li[data-label=${data.salaryGrade}]`).click();
             cy.get('[id="formPayGrade:txtSalaryStep_label"]').click() 
             cy.get(`li.ui-selectonemenu-item.ui-selectonemenu-list-item.ui-corner-all li[data-label=4]`).click();
            //  cy.get(`li[data-label=${data.salaryStep}]`).click();
            })
        })
    }
)








