context('Viewport', () => {
    beforeEach(() => {
      cy.visit('https://172.21.35.239:8181/ERP-war/erp/hrms/hrmsDashboard.xhtml')
    })
 
    it('is it visible on 320 height,and 480 width', () => {
      cy.get('.main-sidebar').should('be.visible')
      cy.viewport(320, 480)
    });
  
    it('is it visible on macbook-15 device', () => {
      cy.get('.main-sidebar').should('be.visible')
      cy.viewport('macbook-15')
      cy.wait(200)
    });
    it('is it visible on macbook-13 device', () => {
      cy.get('.main-sidebar').should('be.visible')
      cy.viewport('macbook-13')
      cy.wait(200)
    });
    it('is it visible on iphone-x device', () => {
      cy.get('.main-sidebar').should('be.visible')
      cy.viewport('iphone-x')
      cy.wait(200)
    });
   
    it('is it visible on macbook-11 device', () => {
      cy.get('.main-sidebar').should('be.visible')
      cy.viewport('macbook-11')
      cy.wait(200)
    });
    it('is it visible on ipad-2 device', () => {
      cy.get('.main-sidebar').should('be.visible')
      cy.viewport('ipad-2')
      cy.wait(200)
    });
    it('is it visible on ipad-mini device', () => {
      cy.get('.main-sidebar').should('be.visible')
      cy.viewport('ipad-mini')
      cy.wait(200)
    });
    // it('is it visible on iphone-x device', () => {
    //   cy.get('.main-sidebar').should('be.visible')
    //   cy.viewport('iphon')
    //   cy.wait(200)
    // });
  });