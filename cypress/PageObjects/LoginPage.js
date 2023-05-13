import login from '../selectors/login.sel'

class Login {

    txtUserName=login.userNameField
    txtPassword=login.passwordField 
    loginButton=login.signInButton
    expectedPass=login.expectedMessage
    expectedError=login.expectedMessageError

 setUserName(username){
    cy.get(this.txtUserName).type(username)
 }

 setPassword(password){
    cy.get(this.txtPassword).type(password)
 }


 clickLogin(){
    cy.get(this.loginButton).should('have.text', 'Login').click()
 }

 verifyLogin(username, password, expectedResult)
 {
   if(username=="hiwot"&&password=="1234"){
      cy.get(this.expectedPass).should('be.visible').should('have.text', expectedResult)
   }
   else{
      cy.get(this.expectedError).should('be.visible')
      cy.screenshot()
   }


 }
}
export default Login;