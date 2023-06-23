import Login from "../../PageObjects/LoginPage.js"
const testData = require('../../fixtures/payGrade.json');

console.log(testData.url)
describe('PayGradeTest', () => {
    before(() => {
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
               
       
             

            })
        })
    }
)








