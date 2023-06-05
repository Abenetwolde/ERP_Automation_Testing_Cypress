
import Document from "../PageObjects/documentData.js"
import Login from "../PageObjects/LoginPage.js"
describe('documentRequest', () => {
    before(() => {
            cy.get('body').then(($body) => {
                if ($body.text().includes('hiwot')) {
                  return;
                } else {
                    const logUrl = Cypress.env('loginUrl')
                  // User is not logged in, redirect to login page
                  
           
         
                  const loginObject= new Login()
                  cy.visit(`${logUrl}`)
                  loginObject.setUserName("hiwot")
                  loginObject.setPassword(1234)
                  loginObject.clickLogin();
                }
              });
    //     cy.getCookie('JSESSIONID').then((cookie) => {
    //         if (cookie === null) {
    //             const loginUrl = Cypress.env('loginUrl')
    //             const loginObject= new Login()
    //             cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml")
    //             loginObject.setUserName("hiwot")
    //             loginObject.setPassword(1234)
    //             loginObject.clickLogin()
    //           }

    //   });   
    })

    it('DataDrivendDcumentRequestTest', () => {
        const docUrl = Cypress.env('docUrl')
        cy.fixture("documentData").then((data) => {
            data.documentData.forEach((docData) => {
                const docObject = new Document()
                // cy.visit(`${docUrl}`)
          /*       const loginObject = new Login()
                loginObject.setUserName("hiwot")
                loginObject.setPassword(1234)
                loginObject.clickLogin()
              */
                docObject.clickPluseIcon()
                cy.wait(2000)
                docObject.clickEmpNameTextFeild()
                cy.wait(2000)
                docObject.setEmpName(docData.employeeName)
                cy.wait(5000)
                docObject.clickenter()
                // docObject.clickEmpName()
                docObject.clickDocType()
                cy.wait(2000)
                docObject.clickselectDocument()
                cy.wait(2000)
                docObject.setRequestDate(docData.requestDate)
                // docObject.clickenterRequestDate()
                cy.wait(2000)
                // docObject.clickSelectRequestDate()
                // cy.wait(500)
                docObject.setPreparedOn( docData.preparedOn)
                cy.wait(500)
                // docObject.clickSelectRequestDate()
                // cy.wait(500)
                docObject.setComment(docData.CommentGiven)
                cy.wait(2000)
                docObject.clickSave()
                docObject.verifyDocumentRegister(docData.expectedResult);
                cy.reload()
                // cy.clearCookies()
                // cy.clearLocalStorage()
            })
        })

    })




}
)
