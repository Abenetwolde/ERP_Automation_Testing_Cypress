// import Login from "../../PageObjects/LoginPage.js"
// const testData = require('../../fixtures/IFRS/accuredleaveBalance.json');
import "../../../support/auth.js"
// console.log(testData.url)
describe('unplannedTrainingRequest testing ', () => {
    beforeEach(() => {
        cy.session("JSESSIONID", () => {
            // Check if the "JSESSIONID" cookie is present
            cy.getCookie("JSESSIONID").then((cookie) => {
                // If the cookie is not present, log in
                if (!cookie) {
                    cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/preserviceTrainees.xhtml", 'hiwot', 1234);
                    //reusable login command
                }

            })
        });
    })
    // testData.SeveranceLiability.forEach((data, i) => {
    it("preserviceCourses Update testcase", () => {
        cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/training/preserviceTrainees.xhtml")
        cy.wait(500)
        // select year
        cy.get('[id="frmPreService:txtSrchYear_label"]').click()
        //clcik Load Request List
        cy.wait(1000)
        cy.get('[data-label="2016"]').click();
        //clcik any row from the table
        cy.get('table[role="grid"] tbody tr').contains('td', '2016').click();
        cy.wait(500)
        // cy.get('table tbody tr').contains('td', 'fcmsAppFirstName').click();
        //write firstname
        cy.get('[id="frmPreService:txtFname"]').type("txtFname")
        //write Middle Name:  
        cy.get('[id="frmPreService:txtMname"]').type("txtMname")
        cy.wait(500)
        //write Last Name:  : 
        cy.get('[id="frmPreService:txtLname"]').type("txtLname")

        //write firstname
        cy.get('[id="frmPreService:txtFnameA"]').type("txtFnameA")

        //write Middle Name:  
        cy.get('[id="frmPreService:txtMnameA"]').type("txtMnameA")

        //write Last Name:   
        cy.get('[id="frmPreService:txtLnameA"]').type("txtLnameA")

        //Trainees ID:  
        cy.get('[id="frmPreService:txtTraineeNo"]').type("txtTraineeNo")
        cy.wait(500)
        //select Address:  
        cy.get('[id="frmPreService:txtResidenceAddress"]').type("txtTraineeNo")
        //select Address:  
        cy.get('[id="frmPreService:menu"]').click()
        cy.get('div.ui-selectcheckboxmenu-items-wrapper')
            .contains('label', 'Education Qualification Certificate')
            .prev('div.ui-chkbox')
            .click();
        cy.wait(1000)
        // cy.get('a.ui-selectcheckboxmenu-close').click();

        //Add button
        cy.get('[id="frmPreService:btnAdd"]').click()
        cy.wait(1000)
        cy.get('[id="frmPreService:btnSave"]').click()
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
        cy.wait(500)


    })
})


// })

