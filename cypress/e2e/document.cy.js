
import Document from "../PageObjects/documentData.js"
import Login from "../PageObjects/LoginPage.js"
describe('documentRequest', () => {
        it('DataDrivendDcumentRequestTest', () => {
            const docUrl = Cypress.env('docUrl')
            cy.fixture("documentData").then((data)=>{
                data.documentData.forEach((docData)=>{
                    const docObject= new Document()
                    cy.visit(`${docUrl}`)
                    const loginObject= new Login()
                    loginObject.setUserName("hiwot")
                    loginObject.setPassword(1234)
                    loginObject.clickLogin();
                    docObject.clickPluseIcon()
                    cy.wait(2000)
                    docObject.clickEmpNameTextFeild()
                    cy.wait(1000)
                    docObject.setEmpName(docData.employeeName)
                    cy.wait(2000)
                    docObject.clickenter()
                    // docObject.clickEmpName()
                    docObject.clickDocType()
                    cy.wait(500)
                    cy.wait(2000)
                    docObject.clickselectDocument()
                    cy.wait(500)
                    docObject.clickRequestDate()
                    cy.wait(500)
                    docObject.clickSelectRequestDate()
                    cy.wait(500)
                    docObject.clickPreparedOn()
                    cy.wait(500)
                    docObject.clickSelectRequestDate()
                    cy.wait(500)
                    docObject.setComment(docData.CommentGiven)
                    docObject.setComment(docData.CommentGiven)
                    docObject.verifyDocumentRegister(docData.expectedResult);  
                    // cy.clearCookies()
                    // cy.clearLocalStorage()
                })
            })

        })

        
    })

    

