

import Login from "../../PageObjects/LoginPage.js"

describe('OrganizationStruacture Test', () => {
  context('OrganizationStruacture', () => {
    before(() => {
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
    it('the Departement/process, Adress, Staff Plan should not be visible if not select the project ', () => {
        cy.get('li.disabled a[href="#tabWorkUnit"]') 
        .trigger('mouseover')
        .parent()
        .should('have.class','disabled')

        cy.get('li.disabled a[href="#tabDeptAdd"]') 
        .trigger('mouseover')
        .parent()
        .should('have.class','disabled')

        cy.get('li.disabled a[href="#tabStaffPlan"]') 
        .trigger('mouseover')
        .parent()
        .should('have.class','disabled')

      
      })

    })
    
  })




