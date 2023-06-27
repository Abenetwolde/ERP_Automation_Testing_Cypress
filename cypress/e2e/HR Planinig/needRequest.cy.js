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
            cy.wait(500)
            cy.get('li[data-label="2015/2016"]').eq(0).click({force: true});
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
            cy.get('[id="frmNeedRequest:txtNoOfPosition"]').clear().type(2).trigger('change')
            cy.wait(500)
            cy.get('[id="frmNeedRequest:txtHowtobefilled"]').click()
            cy.wait(500)
            cy.get('[data-label="Internal Recruitment"]').click()
            cy.wait(500)
            cy.get('[id="frmNeedRequest:txtWhentobefilled"]').click()
            cy.wait(500)
            cy.get('[data-label="January"]').click()
            cy.wait(500)
            cy.get('[id="frmNeedRequest:txtReasonForRequest"]').type("reason for requist")
            cy.wait(500)
            cy.get('[id="frmNeedRequest:txtPosition"]').type(1)
            cy.wait(500)
            cy.get('[id="frmNeedRequest:btnAdd"]').click()
            cy.wait(500)
        
        })
    })
}
)




