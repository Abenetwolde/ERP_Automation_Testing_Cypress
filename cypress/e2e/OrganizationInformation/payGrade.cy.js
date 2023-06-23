import Login from "../../PageObjects/LoginPage.js"
const testData = require('../../fixtures/payGrade.json');


describe('jobRegistaration Test', () => {
    beforeEach(() => {
        cy.get('body').then(($body) => {
            if ($body.text().includes('hiwot')) {
                return;
            } else {
                const loginObject = new Login()
                cy.visit('https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/payGrade.xhtml')
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
               
                const loginObject = new Login()
                cy.visit('https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/payGrade.xhtml')
                loginObject.setUserName("hiwot")
                loginObject.setPassword(1234)
                loginObject.clickLogin();
                cy.reload()

            })
        })
    }
)








