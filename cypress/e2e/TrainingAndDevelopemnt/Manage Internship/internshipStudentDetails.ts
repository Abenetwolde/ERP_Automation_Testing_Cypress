
import "../../../support/auth.d.ts"

describe('internshipStudentDetails testing ', () => {


    it("internshipStudentDetails Tests", () => {
        cy.loginCommand("https://172.21.35.239:8181/ERP-war/erp/hrms/training/internshipStudentDetails.xhtml", 'hiwot', 1234);
        cy.wait(500)
        //Unversity
        cy.get('[id="frmTop:btnNew"]').click()
        cy.wait(500)
        cy.get('[id="frmUniversity:drdYear_label"]').click()
        cy.wait(500)
        cy.get('[data-label="2016/2017"]').eq(1).click()
        cy.wait(500)
        cy.get('[id="frmUniversity:drdsemester_label"]').click()
        cy.wait(500)
        cy.get('[data-label="I"]').click()
        cy.wait(500)
        cy.get('[id="frmUniversity:drduniversity_label"]').click()
        cy.wait(500)
        cy.get('[data-label="AASTUu ww"]').click()
        cy.wait(500)
        cy.get('[id="frmUniversity:txtFdate"]').type("12/01/2013")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
        cy.wait(500)
        cy.get('[id="frmUniversity:txtTdate"]').type("12/06/2013")
        cy.wait(500)
        cy.get('a[style="cursor: hand;color:#FF82AB;padding:1px; text-align:right;"]').contains('Hide').click()
        cy.wait(500)
        cy.get('[id="frmUniversity:txtfirstName"]').clear().type("First Name")
        cy.wait(500)
        cy.get('[id="frmUniversity:txtmiddleName"]').clear().type("Middle Name")
        cy.wait(500)
        cy.get('[id="frmUniversity:txtlastName"]').clear().type("Last Name")
        cy.wait(500)
        cy.get('[id="frmUniversity:txtstream"]').clear().type("stream")
        cy.wait(500)
        cy.get('[id="frmUniversity:btnAddress"]').click()
        cy.wait(500)
        cy.get('[id="frmUniversity:addressTree:0:nodetxt"]').click()
        cy.wait(500)
        cy.get('[id="frmUniversity:txtphoneNumber"]').type("(+251) 947-081180")
        cy.wait(500)
        cy.get('[id="frmUniversity:btnAdd"]').click()
        cy.wait(500)
        cy.get('[id="frmUniversity:btnSave"]').click()
        cy.wait(1000)
        cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', "Success!")/* .should('contain', "The number 0f employee must equal with participant!") */
    })
})


// })

