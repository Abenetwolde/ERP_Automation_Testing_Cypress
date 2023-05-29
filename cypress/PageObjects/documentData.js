import document from '../selectors/document.sel'

class Document {
   // {
   //    "username": "hiwot",
   //    "password": 12222,
   //    "expectedResults": {
   //      "expectedText": "The username or password you entered is incorrect",
   //      "status": ""

   //    }
   //  },
   //  {
   //    "username": "abnet",
   //    "password": 1234,
   //    "expectedResults": {
   //      "expectedText": "The username or password you entered is incorrect",
   //      "status": ""

   //    }
   //  },
   //  {
   //    "username": "a",
   //    "password": 1234,
   //    "expectedResults": {
   //      "expectedText": "The username or password you entered is incorrect",
   //      "status": ""

   //    }
   //  }
  
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
 clickEmpNameTextFeild(){
   cy.get(this.empName).click()
}

 setEmpName(employeeName){
    cy.get(this.empName).type(employeeName)
 }
 clickenter(){
   cy.get(this.empName ).type('{enter}')
}
 clickEmpName(){
    cy.get(this.selectEmpName).click()
 }

 clickDocType(){
    cy.get(this.documentType).click()
 }
 clickselectDocument(){
   //  cy.contains(this.selectDocument,'Experience').click()
   cy.get('li[data-label="Experience"]').click()
   }

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
//  
      cy.get(this.successContainer).should('have.text', expectedResult)
//    }
//    

 }
}
export default Document;