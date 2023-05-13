import jobRegistartion from '../selectors/login.sel'

class jobRegistaration {

    pluseIcon = jobRegistartion.pluseIcon
    jobCode = jobRegistartion.jobCode
    departement = jobRegistartion.departement
    jobTitle = jobRegistartion.jobTitle
    jobDiscription = jobRegistartion.jobDiscription
    relevantExperince = jobRegistartion.relevantExperince
    alternativeExperince = jobRegistartion.alternativeExperince
    dropdownIconForJobGrade = jobRegistartion.dropdownIconForJobGrade
    selectJobGrade = jobRegistartion.selectJobGrade
    dropdownIconForJobCatagory = jobRegistartion.dropdownIconForJobCatagory
    selectJobCatagory = jobRegistartion.radioButton
    radioButton = jobRegistartion.dropdownIconForEducationLevel
    dropdownIconForEducationLevel = jobRegistartion.selectEducationLevel
    selectEducationLevel = jobRegistartion.dropdownIconForqualificatio
    dropdownIconForqualification = jobRegistartion.selectQualification
    selectQualification = jobRegistartion.Experience
    Experience = jobRegistartion.addButton
    addButton = jobRegistartion.saveButton
    saveButton = jobRegistartion.successContainer

    clickPluseIcon() {
        cy.get(this.pluseIcon).click()
    }

    setJobCode(jobcode) {
        cy.get(this.jobCode).type(jobcode)
    }


    setDepartment(departement) {
        cy.get(this.departement).type(departement)
    }
    setJobTitle(jobtitle) {
        cy.get(this.jobtitle).type(jobtitle)
    }
   
    setJobDiscrption(jobDiscrption) {
        cy.get(this.jobDiscription).type(jobDiscrption)
    }
    setRelevantExp(relevantExp) {
        cy.get(this.relevantExperince).type(relevantExp)
    }
    setAltExp(altExp) {
        cy.get(this.alternativeExperince).type(altExp)
    }
    clickDropdownIconForJobGrade() {
        cy.get(this.dropdownIconForJobGrade).click()
    }
   selectJobGrade() {
        cy.get(this.selectJobGrade).click()
    }
    clickDropdownIconForjobCatagoery() {
        cy.get(this.dropdownIconForJobCatagory).click()
    }
   selectJobCatagoery() {
        cy.get(this.selectJobCatagory).click()
    }
    selectRadioButton() {
        cy.get(this.radioButton).click()
    }
    clickDropdownIconForEducationLevel() {
        cy.get(this.dropdownIconForEducationLevel).click()
    }
   selectEducationLevel() {
        cy.get(this.selectEducationLevel).click()
    }
    clickDropdownIconForQualification() {
        cy.get(this.dropdownIconForqualificatio).click()
    }
   selectQualification() {
        cy.get(this.selectQualification).click()
    }
    setExperince(altExp) {
        cy.get(this.Experience).type(altExp)
    }

    clickAddButton() {
        cy.get(this.addButton).click()
    }
    clickSubmitButton() {
        cy.get(this.saveButton).click()
    }

    verifyJobRigistration(expectedResult) {
     
            cy.get(this.successContainer).should('be.visible').should("eq",expectedResult)
    
  
        //.and('have.css', 'color', 'rgb(92, 184, 92)')
        // cy.get(this.expected).should('be.visible')
        // .should("eq",expected)


    }
}
export default jobRegistaration;