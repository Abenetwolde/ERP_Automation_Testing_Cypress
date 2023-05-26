
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
                    docObject.setEmpName(`Almaz {enter}`)
                    // docObject.clickEmpName()
                    docObject.clickDocType()
                    docObject.clickselectDocument()
                    docObject.clickRequestDate()
                    docObject.clickSelectRequestDate()
                    docObject.clickPreparedOn()
                    docObject.clickSelectRequestDate()
                    docObject.setComment(docData.CommentGiven)
                    docObject.setComment(docData.CommentGiven)
                    docObject.verifyDocumentRegister(docData.expectedResult);  
                    // cy.clearCookies()
                    // cy.clearLocalStorage()
                })
            })

        })

        
    })

    

