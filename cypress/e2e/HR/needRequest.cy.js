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
        // cy.fixture('PayGrade').then(data => {
        //     testData = data.payGradeData;
        // });

        // beforeEach(() => {
        //     JSON.stringify(testData);
        // });

    })
    /*    // {
      //   "testName":"Successfuly Test Data",
      //   "salaryGrade": "E4",
      //   "salaryStep": "9 ",
      //   "salary": "5000",
      //   "expectedResult":"Success"
      
      // },
      // {
      //   "testName":"Successfuly Test Data",
      //   "salaryGrade": "E4",
      //   "salaryStep": "9 ",
      //   "salary": "5000",
      //   "expectedResult":"Success"
      
      // }
   */

    testData.needRequest.forEach((data, i) => {
        it(`test datat ${data.testName}`, () => {
            cy.get('[id="frmSample:j_idt76"]').click()
            
            cy.get('[id="frmNeedRequest:somYear"]').click()
            cy.get('li[data-label="2015/2016"]').eq(0).click({force: true});
            cy.get('[id="frmNeedRequest:btnTree"]').click()

            frmNeedRequest:sonJob
            frmNeedRequest:sonJob
            frmNeedRequest:txtNoOfPosition
            


            //  cy.get(`li[data-label=${data.salaryStep}]`).click();
        })
    })
}
)




