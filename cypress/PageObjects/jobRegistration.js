import jobRegistartion from '../selectors/jobRegistartion.sel'

class jobRegistaration {
    pluseIcon = jobRegistartion.pluseIcon
    jobCode = jobRegistartion.jobCode
    departement = jobRegistartion.departement
    jobtitle = jobRegistartion.jobTitle
    jobDiscription = jobRegistartion.jobDiscription
    relevantExperince = jobRegistartion.relevantExperince
    alternativeExperince = jobRegistartion.alternativeExperince
    dropdownIconForJobGrade = jobRegistartion.dropdownIconForJobGrade
    selectJobGrade = jobRegistartion.selectJobGrade
    dropdownIconForJobCatagory = jobRegistartion.dropdownIconForJobCatagory
    selectJobCatagory = jobRegistartion.radioButton
    radioButton = jobRegistartion.radioButton
    dropdownIconForEducationLevel = jobRegistartion.dropdownIconForEducationLevel
    selectEducationLevel = jobRegistartion.selectEducationLevel
    dropdownIconForqualification = jobRegistartion.dropdownIconForqualification
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
     selectJobGrades() {
            cy.get('li[data-label="D2"]').contains('D2').click()
        }
    clickDropdownIconForjobCatagoery() {
        cy.get(this.dropdownIconForJobCatagory).click()
    }
    selectJobCatagoery() {
        cy.get('li[data-label="Professionals"]').contains('Professionals').click()
    }
    selectRadioButton() {
        cy.get(this.radioButton).click()
    }
    clickDropdownIconForEducationLevel() {
        cy.get(this.dropdownIconForEducationLevel).click()
    }
    selectEducationLevel() {
        cy.contains(this.selectEducationLevel, '6th Grade Complete').click()
    }
    clickDropdownIconForQualification() {
        cy.get(this.dropdownIconForqualification).click()
    }
    selectQualifications() {
        cy.get('li[data-label="Accounting"]').contains('Accounting').click()
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

        cy.get(this.successContainer).should('be.visible').should("eq", expectedResult)


        //.and('have.css', 'color', 'rgb(92, 184, 92)')
        // cy.get(this.expected).should('be.visible')
        // .should("eq",expected)


    }
}
export default jobRegistaration;