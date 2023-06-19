import Login from "../PageObjects/LoginPage.js"
import jobRegistaration from "../PageObjects/jobRegistration.js"
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
          jobRegistarationObject.clickPluseIcon()
          cy.wait(1000)
          jobRegistarationObject.setJobCode(i!==0?jobdata.jobCode:jobdata.jobCode+`${Cypress._.random(1, 100)}`)
          cy.wait(500)
          jobRegistarationObject.setDepartment(jobdata.departement)
          cy.wait(500)
          jobRegistarationObject.setJobTitle(i!==0?jobdata.jobTitle:jobdata.jobTitle+`${Cypress._.random(1, 100)}`)
          cy.wait(500)
          jobRegistarationObject.setJobDiscrption(jobdata.jobDiscription)
          cy.wait(500)
          jobRegistarationObject.setRelevantExps(jobdata.relevantExperince)
          cy.wait(500)
          jobRegistarationObject.setAltExps(jobdata.alternativeExperince)
          cy.wait(500)
          jobRegistarationObject.clickDropdownIconForJobGrade();
          cy.wait(500)
          jobRegistarationObject.selectJobGrades();
          cy.wait(500)
          jobRegistarationObject.clickDropdownIconForjobCatagoery();
          cy.wait(500)
          jobRegistarationObject.selectJobCatagoery();
          cy.wait(500)
          // jobRegistarationObject.selectRadioButton();
          jobRegistarationObject.clickDropdownIconForEducationLevels();
           cy.wait(500)
          jobRegistarationObject.selectEducationLevels();
          cy.wait(500)
          jobRegistarationObject.clickDropdownIconForQualification();
          cy.wait(500)
          jobRegistarationObject.selectQualifications();
          cy.wait(500)
          jobRegistarationObject.setExperinces(jobdata.Experience);
          cy.wait(500)
          jobRegistarationObject.clickAddButton();
          cy.wait(500)
          jobRegistarationObject.clickSubmitButton();
          cy.wait(1000)
          jobRegistarationObject.verifyJobRigistration(jobdata.expectedResult);
          cy.wait(500)
          cy.reload()

        })
      })

    })
    //    { cookie && it('Data driven jobRegistaration Test', () => {
    //         const jobRegistarationObject= new jobRegistaration()
    //         cy.fixture("jobRegistrationTestData").then((data)=>{
    //             data.jobRegistrationTestData.forEach((jobdata)=>{
    //                 cy.visit('https://172.21.35.248:8181/ERP-war/erp/hrms/organization/jobRegistration.xhtml')
    //                 jobRegistarationObject.clickPluseIcon()
    //                 jobRegistarationObject.setJobCode(jobdata.jobCode)
    //                 jobRegistarationObject.setDepartment(jobdata.departement)
    //                 jobRegistarationObject.setJobTitle(jobdata.jobTitle)
    //                 jobRegistarationObject.setJobDiscription(jobdata.jobDiscription)
    //                 jobRegistarationObject.setRelevantExp(jobdata.relevantExperince)
    //                 jobRegistarationObject.setAltExp(jobdata.alternativeExperince)
    //                 jobRegistarationObject.clickDropdownIconForJobGrade();
    //                 jobRegistarationObject.selectJobGrade();
    //                 jobRegistarationObject.clickDropdownIconForjobCatagoery();
    //                 jobRegistarationObject.selectJobCatagoery();
    //                 jobRegistarationObject.selectRadioButton();
    //                 jobRegistarationObject.clickDropdownIconForEducationLevel();
    //                 jobRegistarationObject.clickDropdownIconForQualification();
    //                 jobRegistarationObject.setExperince(jobdata.Experience);
    //                 jobRegistarationObject.clickAddButton();
    //                 jobRegistarationObject.clickSubmitButton();
    //                 jobRegistarationObject.verifyJobRigistration(jobdata.expectedResult);  

    //             })
    //         })

    //     })}


  })




})
