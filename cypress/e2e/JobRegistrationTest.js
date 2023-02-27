
import jobRegistaration from "../PageObjects/LoginPage.js"
describe('jobRegistaration Test', () => {
    context('jobRegistaration Test', () => {
        before(() => {
               cy.AuthCommand().then((response) => {
        cy.wrap(response.cookie).as(cookie)
    })
        })

       { cookie && it('Data driven jobRegistaration Test', () => {
            const jobRegistarationObject= new jobRegistaration()
            cy.fixture("jobRegistrationTestData").then((data)=>{
                data.jobRegistrationTestData.forEach((jobdata)=>{
                    cy.visit('https://172.21.35.248:8181/ERP-war/erp/hrms/organization/jobRegistration.xhtml')
                    jobRegistarationObject.clickPluseIcon()
                    jobRegistarationObject.setJobCode(jobdata.jobCode)
                    jobRegistarationObject.setDepartment(jobdata.departement)
                    jobRegistarationObject.setJobTitle(jobdata.jobTitle)
                    jobRegistarationObject.setJobDiscription(jobdata.jobDiscription)
                    jobRegistarationObject.setRelevantExp(jobdata.relevantExperince)
                    jobRegistarationObject.setAltExp(jobdata.alternativeExperince)
                    jobRegistarationObject.clickDropdownIconForJobGrade();
                    jobRegistarationObject.selectJobGrade();
                    jobRegistarationObject.clickDropdownIconForjobCatagoery();
                    jobRegistarationObject.selectJobCatagoery();
                    jobRegistarationObject.selectRadioButton();
                    jobRegistarationObject.clickDropdownIconForEducationLevel();
                    jobRegistarationObject.clickDropdownIconForQualification();
                    jobRegistarationObject.setExperince(jobdata.Experience);
                    jobRegistarationObject.clickAddButton();
                    jobRegistarationObject.clickSubmitButton();
                    jobRegistarationObject.verifyJobRigistration(jobdata.expectedResult);  
                 
                })
            })

        })}

     
    })



  
})
