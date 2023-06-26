import Login from "../../PageObjects/LoginPage.js"
const testData = require('../../fixtures/payGrade.json');

console.log(testData.url)
describe('PayGradeTest', () => {
    beforeEach(() => {
        cy.get('body').then(($body) => {
            if ($body.text().includes('hiwot')) {
                return;
            } else {
                const loginObject = new Login()
                cy.visit(`${testData.url}`)
                loginObject.setUserName("hiwot")
                loginObject.setPassword(1234)
                loginObject.clickLogin();
            }
        });
        // cy.fixture('PayGrade').then(data => {
        //     testData = data.payGradeData;
        // });

        // beforeEach(() => {
        //     JSON.stringify(testData);
        // });

    })
    /*    // {
      //   "testName":"Successfuly Test Data",
      //   "salaryGrade": "E4",
      //   "salaryStep": "9 ",
      //   "salary": "5000",
      //   "expectedResult":"Success"
      
      // },
      // {
      //   "testName":"Successfuly Test Data",
      //   "salaryGrade": "E4",
      //   "salaryStep": "9 ",
      //   "salary": "5000",
      //   "expectedResult":"Success"
      
      // }
   */

      testData.payGradeData.forEach((data,i) => {
            it(`test datat ${data.testName}`, () => {
               
             cy.get('[id="formPayGrade:drdGrade_label"]').click()
             cy.wait(500)
             cy.get(`li[data-label=${data.salaryGrade}]`).click();
             cy.wait(500)
             cy.get('[id="formPayGrade:txtSalaryStep_label"]').click() 
             cy.wait(500)
             cy.get('.ui-selectonemenu-items-wrapper').should('be.visible')

             cy.get(`div.ui-selectonemenu-items-wrapper li[data-label=${data.salaryStep}]`).click({ force: true })
             cy.wait(500)
             cy.get('[id="formPayGrade:txtSalary"]').type(data.salary) 
             cy.wait(500)
            
             cy.get('[id="formPayGrade:btnAdd"]').click({ force: true }) 
             cy.wait(1000)
            //  cy.get('.ui-growl-message').should('be.visible').invoke('text').then((text) => {
            //     const error = text.split('\n')[0].trim()
            //     const message = text.split('\n')[1].trim()
            //     expect(error).to.equal('Error!')
            //     expect(message).to.equal('Duplicate entry salary step')
            //   })
            cy.get('.ui-growl-message').should('be.visible').invoke('text').should('contain', data.expectedResult.mainText).should('contain', data.expectedResult.subText)

             cy.wait(500)
          
           
            //  cy.get(`li[data-label=${data.salaryStep}]`).click();
            })
        })
    }
)








