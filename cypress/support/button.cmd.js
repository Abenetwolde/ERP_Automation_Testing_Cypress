Cypress.Commands.add('register', () => {
    const apiUrl = Cypress.env('apiUrl')
    const username = `cy${Math.random().toString().slice(2, 11)}`
    const email = `${username}@mailinator.com`
    const password = Cypress.env('password')

    cy.request({

    })
        .then((response) => {
            expect(response.status).to.eq(200)
          
        })
        .then(() => ({
            // we need email and username in tests
            email: email,
            username: username
        }))
})
