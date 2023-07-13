
import "../../../support/auth.js"
import Login from "../../../PageObjects/LoginPage.js"

describe('OrganizationStruacture Test', () => {
    context('OrganizationStruacture', () => {
        beforeEach(() => {
            cy.session("JSESSIONID", () => {
                // Check if the "JSESSIONID" cookie is present
                cy.getCookie("JSESSIONID").then((cookie) => {
                    // If the cookie is not present, log in
                    if (!cookie) {
                        cy.loginCommand("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml", 'hiwot', 1234);
                        //reusable login command
                    }
    
                })
            });
        })
       
        it('the Departement/process, Adress, Staff Plan should not be visible if not select the project ', () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
            cy.get('li a[href="#tabWorkUnit"]')
                .trigger('mouseover')
                .parent()
                .should('have.class', 'disabled')

            cy.get('li.disabled a[href="#tabDeptAdd"]')
                .trigger('mouseover')
                .parent()
                .should('have.class', 'disabled')

            cy.get('li.disabled a[href="#tabStaffPlan"]')
                .trigger('mouseover')
                .parent()
                .should('have.class', 'disabled')
           
        })
        it('the Departement/process, Adress, Staff Plan should be visible if not select the project ', () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
            cy.get('span.ui-treenode-label.ui-corner-all').contains('INSA=>1').click()
            cy.get(' a[href="#tabWorkUnit"]').should('have.attr', 'data-toggle');

            // frmOrganizationStructure:pnlgTree

            cy.get(' a[href="#tabDeptAdd"]').should('have.attr', 'data-toggle');
            

            cy.get(' a[href="#tabStaffPlan"]').should('have.attr', 'data-toggle');
            
        
        })

    })

})




