context('successful', () => {
        beforeEach(() => {
            // we need a new user
            cy.register().then((response) => {
                cy.wrap(response.email).as('email')
            })
            // log out - clear cookies and localstorage
            cy.clearCookies()
            cy.clearLocalStorage()
            cy.visit('/login')
        })

        it('can log in', function () {
            const password = Cypress.env('password')

            cy.get(login.emailField).type(this.email)
            cy.get(login.passwordField).type(password)
            cy.get(login.signInButton).click()
            cy.get(header.settingsLink).should('be.visible')
        })
    })