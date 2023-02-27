
import jobRegistaration from "../PageObjects/LoginPage.js"
describe('Login', () => {
    // context is the same as describe
    context('login', () => {
        beforeEach(() => {
            // visit ('/login') -> will visit baseUrl + /login
            // baseUrl is set in config - cypress.json file
           // cy.visit('https://172.21.35.248:8181/ERP-war/Login.xhtml?continue=https://172.21.35.248:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml')
        })

        it('jobRegistaration Test', () => {
            const jobRegistarationObject= new jobRegistaration()
            cy.fixture("jobRegistrationTestData").then((data)=>{
                data.forEach((userdata)=>{
                    cy.visit('https://172.21.35.248:8181/ERP-war/erp/hrms/organization/jobRegistration.xhtml')
                    jobRegistarationObject.clickPluseIcon()
                    loginObject.setJobCode(userdata.username)
                    loginObject.setDepartment(userdata.password)
                    loginObject.setJobTitle(userdata.password)
                    loginObject.setRelevantExp(userdata.password)
                    loginObject.setAltExp(userdata.password)
                    loginObject.clickDropdownIconForJobGrade();
                    loginObject.selectJobGrade();
                    loginObject.clickDropdownIconForjobCatagoery();
                    loginObject.selectJobCatagoery();
                    loginObject.selectRadioButton();
                    loginObject.clickDropdownIconForEducationLevel();
                    loginObject.clickDropdownIconForQualification();
                    loginObject.setExperince();
                    loginObject.clickAddButton();
                    loginObject.clickSubmitButton();
                    loginObject.verifyJobRigistration(userdata.username,userdata.password,userdata.expectedResult);  
                 
                })
            })

        })

     
    })



  
})
