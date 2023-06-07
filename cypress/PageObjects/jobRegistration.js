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
    Experience = jobRegistartion.Experience
    addButton = jobRegistartion.addButton
    saveButton = jobRegistartion.saveButton
    successContainer = jobRegistartion.successContainer

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
    setRelevantExps(relevantExp) {
        cy.get(this.relevantExperince).type(relevantExp)
    }
    setAltExps(altExp) {
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
    clickDropdownIconForEducationLevels() {
        cy.get(this.dropdownIconForEducationLevel).click()
    }
    selectEducationLevels() {
        cy.get('li[data-label="6th Grade Complete"]').contains('6th Grade Complete').click()
    }
    clickDropdownIconForQualification() {
        cy.get(this.dropdownIconForqualification).click()
    }
    selectQualifications() {
        cy.get('li[data-label="Accounting"]').contains('Accounting').click()
    }
    setExperinces(altExp) {
        cy.get(this.Experience).type(altExp)
    }

    clickAddButton() {
        cy.get(this.addButton).contains('Add').click()
    }
    clickSubmitButton() {
        cy.get(this.saveButton).contains('save').click()
    }

    verifyJobRigistration(expectedResult) {

        cy.get(this.successContainer)/* .should('be.visible') */.should('have.text', expectedResult)


        //.and('have.css', 'color', 'rgb(92, 184, 92)')
        // cy.get(this.expected).should('be.visible')
        // .should("eq",expected)


    }
}
export default jobRegistaration;