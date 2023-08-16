Feature: Login

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the home page

  Scenario: Unsuccessful login due to incorrect password
    Given I am on the login page
    When I enter an incorrect password
    And I click the login button
    Then I should see an error message

  Scenario: Unsuccessful login due to incorrect username
    Given I am on the login page
    When I enter an incorrect username
    And I click the login button
    Then I should see an error message

  Scenario: Unsuccessful login due to empty fields
    Given I am on the login page
    When I leave the username and password fields empty
    And I click the login button
    Then I should see an error message
