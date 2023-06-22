

import Login from "../../PageObjects/LoginPage.js"

describe('OrganizationStruacture Test', () => {
    context('OrganizationStruacture', () => {
        beforeEach(() => {
            cy.get('body').then(($body) => {
                if ($body.text().includes('hiwot')) {
                    return;
                } else {
                    const JobUrl = Cypress.env('JobUrl')
                    const loginObject = new Login()
                    cy.visit("https://172.21.35.239:8181/ERP-war/Login.xhtml?continue=https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
                    loginObject.setUserName("hiwot")
                    loginObject.setPassword(1234)
                    loginObject.clickLogin();
                }
            });

        })
        // afterEach(() => {
        //     cy.visit("https://172.21.35.239:8181/ERP-war/erp/hrms/organization/OrganizationStruacture.xhtml")
        // })
        // afterEach(() => {
        //     cy.reload()
        // })
    
        it('the Departement/process, Adress, Staff Plan should not be visible if not select the project ', () => {
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
     
            cy.get('span.ui-treenode-label.ui-corner-all').contains('INSA=>1').click()
            cy.get(' a[href="#tabWorkUnit"]').should('have.attr', 'data-toggle');

            // frmOrganizationStructure:pnlgTree

            cy.get(' a[href="#tabDeptAdd"]').should('have.attr', 'data-toggle');
            

            cy.get(' a[href="#tabStaffPlan"]').should('have.attr', 'data-toggle');
            
        
        })

    })

})




