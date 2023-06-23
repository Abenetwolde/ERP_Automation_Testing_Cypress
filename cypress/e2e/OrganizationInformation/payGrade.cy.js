import Login from "../../PageObjects/LoginPage.js"
import jobRegistaration from "../../PageObjects/jobRegistration.js"
describe('jobRegistaration Test', () => {
  context('jobRegistaration Test', () => {
    before(() => {
      cy.get('body').then(($body) => {
        if ($body.text().includes('hiwot')) {
          return;
        } else {
          const JobUrl = Cypress.env('JobUrl')
          const loginObject = new Login()
          cy.visit(`${JobUrl}`)
          loginObject.setUserName("hiwot")
          loginObject.setPassword(1234)
          loginObject.clickLogin();
        }
      });

    })
    it('Data driven jobRegistaration Test', () => {
      const jobRegistarationObject = new jobRegistaration()
      // const JobUrl = Cypress.env('JobUrl')
      cy.fixture("jobRegistrationTestData").then((data) => {
        data.jobRegistrationTestData.map((jobdata,i) => {
          // cy.visit(`${JobUrl}`)
   
          cy.wait(500)
          cy.reload()

        })
      })

    })

  })




})
