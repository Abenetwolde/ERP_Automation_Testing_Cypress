import document from '../selectors/document.sel'

class Document {
    pluse=document.pluseIcon
    empName=document.employeeName
    selectEmpName=document.selectEmployeeName
    documentType=document.documentType
    selectDocument=document.selectDocument
    requestDate=document.requestDate
    selectRequestDate=document.selectRequestDate
    preparedOn=document.preparedOn
    selectDate=document.selectDate
    commentGiven=document.commentGiven
    saveButton=document.saveButton
    selectRequestDate=document.selectRequestDate
    successContainer=document.successContainer
    errorIcon=document.errorIcon

 clickPluseIcon(){
    cy.get(this.pluse).click()
 }

 setEmpName(employeeName){
    cy.get(this.empName).type(employeeName)
 }
 clickEmpName(){
    cy.get(this.selectEmpName).click()
 }

 clickDocType(){
    cy.get(this.documentType).click()
 }
 clickselectDocument(){
    cy.contains(this.selectDocument,'Experience').click()}

 clickRequestDate(){
    cy.get(this.requestDate).click()
 }
 clickSelectRequestDate(){
    cy.get(this.selectRequestDate).click()
 }

 clickPreparedOn(){
    cy.get(this.preparedOn).click()
 }

 clickSelectRequestDate(){
    cy.get(this.selectDate).click()
 }

 setComment(commentGiven){
    cy.get(this.commentGiven).type(commentGiven)
 }

 clickSave(){
    cy.get(this.saveButton).click()
 }

 verifyDocumentRegister(expectedResult)
 {
//      const check =cy.get(this.expectedPass).should('be.visible').should('have.text', expectedResult)
//    if(check){
      cy.get(this.expectedPass).should('be.visible').should('have.text', expectedResult)
//    }
//    else{
//       cy.get(this.errorIcon).should('be.visible').and()
//       cy.screenshot()
//    }


 }
}
export default Document;