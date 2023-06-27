import Login from "../../PageObjects/LoginPage.js"
const testData = require('../../fixtures/needRequest.json');

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
  

    testData.needRequest.forEach((data, i) => {
        it(`test datat ${data.testName}`, () => {
            cy.get('[id="frmLeaveBalance:txtYear"]').click()
            cy.get('[id="frmLeaveBalance:txtYear"]').type("")
       
       
        
        
        })
    })
}
)

