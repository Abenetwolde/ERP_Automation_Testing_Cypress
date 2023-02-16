import login from '../selectors/login.sel'

class Login {

    txtLogin=login.emailField
    txtPassword=login.passwordField 
    loginButton=login.signInButton
    expected=login.errorMessages

 setUserName(username){
    cy.get(this.txtLogin).type(username)
 }

 setPassword(password){
    cy.get(this.txtPassword).type(password)
 }


 clickLogin(){
    cy.get(this.loginButton).should('have.text', 'Login').click()
 }
 
 verifyLogin()
 {
    cy.get(this.expected).should('be.visible')
 }
}
export default Login;