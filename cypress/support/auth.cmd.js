
  Cypress.Commands.add('AuthCommand', () => {
    const apiUrl = Cypress.env('apiUrl')
    let cookie
    cy.request({
        url: `${apiUrl}`,
    })
        .then((c) => {
            expect(c.status).to.eq(200)
            cy.getCookie('JSESSIONID')
            .should('exist')
            .then((c) => {
                cookie = c
              })
        })
})
