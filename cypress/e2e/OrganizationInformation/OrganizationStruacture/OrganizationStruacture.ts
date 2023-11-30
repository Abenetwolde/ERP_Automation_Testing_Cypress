
import "../../../support/auth.d.ts"

describe('OrganizationStruacture Test', 
() => {
    
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
       
        it('the Departement/process, Adress, Staff Plan should not be inactive if there is no selected project ', () => {
            // cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
            cy.loginCommand("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml", 'hiwot', 1234);
            cy.wait(1000)
            cy.get('li a[href="#tabWorkUnit"]')
                .trigger('mouseover')
                .parent()
                .should('have.class', 'disabled')
                cy.wait(1000)
            cy.get('li.disabled a[href="#tabDeptAdd"]')
                .trigger('mouseover')
                .parent()
                .should('have.class', 'disabled')
                cy.wait(1000)
            cy.get('li.disabled a[href="#tabStaffPlan"]')
                .trigger('mouseover')
                .parent()
                .should('have.class', 'disabled')
           
        })
        it('the Departement/process, Adress, Staff Plan should be visible by selecting one project ', () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
            cy.wait(1000)
            cy.get('span.ui-treenode-label.ui-corner-all').contains('INSA=>1').click()
            cy.wait(1000)
            cy.get(' a[href="#tabWorkUnit"]').should('have.attr', 'data-toggle');
            cy.wait(1000)

            // frmOrganizationStructure:pnlgTree

            cy.get(' a[href="#tabDeptAdd"]').should('have.attr', 'data-toggle');
            cy.wait(1000)

            cy.get(' a[href="#tabStaffPlan"]').should('have.attr', 'data-toggle');
            cy.wait(1000)
        
        }),
        it('the organization structure hshould have more than one lists', () => {
            cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
            cy.wait(1000)
            cy.get('span.ui-treenode-label.ui-corner-all').contains('INSA=>1').click()
            cy.wait(1000)
            

            cy.get('[id="frmOrganizationStructure:treeDept:0"]')
            .children('li, ul')
            .its('length')
            .should('be.gt', 0);
            
        
        })

    

})




