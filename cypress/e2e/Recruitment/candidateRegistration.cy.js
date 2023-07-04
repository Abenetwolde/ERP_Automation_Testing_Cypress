import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.js"
const testData = require('../../fixtures/IFRS/SeveranceLiability.json');

console.log(testData.url)
describe('SeveranceLiability testing ', () => {
    beforeEach(() => {
      cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
              // If the cookie is not present, log in
              if (!cookie) {
                cy.loginCommand(testData.url,'hiwot', 1234);
                //reusable login command
              }
              else cy.visit("https://172.21.35.239:8181/ERP-war/erp/ifrs/hrms/SeveranceLiability.xhtml")
            })
          });
    })


    testData.SeveranceLiability.forEach((data, i) => {
        it(` ${data.testName}`, () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/recruitment/candidateRegistration.xhtml")
            cy.get('[id="frmLeaveBalance:txtYear"]').click()
        




         } )
    })
    

})

