module.exports = {
    userNameField: 'body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(5) > div:nth-child(3) > input:nth-child(2)',
    passwordField: 'body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(5) > div:nth-child(4) > input:nth-child(2)',
    signInButton: '.ui-button-text.ui-c',
    expectedMessage: 'p',
    expectedMessageError: '.ui-growl-item',
    emailField: '[placeholder=Email]',
    passwordField1: '[placeholder=Password]',
    signInButton1: '.btn',
    errorMessages: '.error-messages li'
}
