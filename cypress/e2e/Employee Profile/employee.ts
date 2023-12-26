import { Validator } from "../../Helpers/Validator.js";
import Login from "../../PageObjects/LoginPage.js"
import "../../support/auth.d.ts"
const testData = require('../../fixtures/HrPlaining/demandAndSupplyAnalysis.json');

console.log(testData.url)
describe('employee registration test', () => {

        it(`employee registration test `, () => {
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/employee/employee.xhtml", 'hiwot', 1234);

            cy.wait(1000)
            cy.get('[id="frmTop:j_idt80"]').click()
            // txtEmployeeId
            cy.get('[id="frmEmployee:txtEmployeeId"]').type("8011")
            cy.wait(1000)
            // title
            cy.get('[id="frmEmployee:somEmpTitle_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="Ato"]`).eq(0).click();
            // name
            cy.get('[id="frmEmployee:txtFirstName"]').type("TestName")
            cy.wait(500)
            // mname
            cy.get('[id="frmEmployee:txtMiddleName"]').type("TestMiddleName")
            cy.wait(500)
             // name
             cy.get('[id="frmEmployee:txtDateOfBirth"]').type("09/04/1996")
             cy.wait(500)
            // name
            cy.get('[id="frmEmployee:txtHireDate"]').type("09/04/2016")
            cy.wait(500)
            //somMaritalStats
            cy.get('[id="frmEmployee:somMaritalStatus_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="Single"]`).eq(0).click();
            // ctxtDepartment
            cy.get('[id="frmEmployee:btnTree"]').click()
            cy.wait(1000)
            // cy.get('[id="frmEmployee:j_idt755:0"]').click({force: true})
            cy.get('.ui-treenode-content.ui-tree-selectable').contains('1--INSA').click({force: true});
            cy.wait(2000)
    
            cy.get('[id="frmEmployee:txtJob_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="Administrative Assistant II"]`).eq(0).click();
            cy.wait(500)

            cy.get('[id="frmEmployee:txtSalaryStep_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="1"]`).eq(0).click();
            cy.wait(500)

            cy.get('[id="frmEmployee:txtNationality_label"]').click()
            cy.wait(500)
            cy.get(`li[data-label="Ethiopian"]`).eq(0).click();
            cy.wait(500)
            // type txtRemark
            cy.get('[id="frmEmployee:btnSave"]').click()
            cy.wait(500)
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */

        })
    })




