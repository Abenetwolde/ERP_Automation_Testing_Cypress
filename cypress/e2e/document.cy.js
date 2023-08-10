
import Document from "../PageObjects/documentData.js"
import Login from "../PageObjects/LoginPage.js"
describe('documentRequest', () => {

  
  before(() => {
    cy.get('body').then(($body) => {
      if ($body.text().includes('hiwot')) {
        return;
      } else {
        const logUrl = Cypress.env('loginUrl')
        const loginObject = new Login()
        cy.visit(`${logUrl}`)
        loginObject.setUserName("hiwot")
        loginObject.setPassword(1234)
        loginObject.clickLogin();
      }
    });
/* describe('Performance testing with Cypress and Lighthouse', () => {
  // Define an array of URLs to test
  const urlsToTest = ['https://example.com/page1', 'https://example.com/page2', 'https://example.com/page3'];
=======
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
                    docObject.setEmpName(`docData.employeeName{enter}`)
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
                    cy.clearCookies()
                    cy.clearLocalStorage()
                })
            })


  // Loop over the URLs and run a performance test on each one
  urlsToTest.forEach((url) => {
    it(`should run performance tests on ${url}`, () => {
      cy.visit(url);

      cy.lighthouse({
        performance: 50,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
        pwa: 50,
      });
    });
  });
}); */   
  })

  it('DataDrivendDcumentRequestTest', () => {
    const docUrl = Cypress.env('docUrl')
    cy.fixture("documentData").then((data) => {
      data.documentData.forEach((docData) => {
        const docObject = new Document()
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
        cy.wait(2000)
        docObject.setPreparedOn(docData.preparedOn)
        cy.wait(500)
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
