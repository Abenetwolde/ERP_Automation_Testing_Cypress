Feature: Login

  Background:
    Given I am on the login page

  Scenario Outline: "<testName>"
    When I enter "<username>" as the username
    When I enter "<password>" as the password
    When I click the login button
    Then <result>

    Examples:
      | testName                         | username       | password           | result                                  |
      | Loginssss with valid credentials | hiwot          | 1234               | I should be redirected to the home page |
      | Login with incorrect password    | valid-username | incorrect-password | I should see an error message           |
      | Login with incorrect username    | hdf            | 122                | I should see an error message           |
      | Login with empty fields          |                |                    | I should see an error message           |