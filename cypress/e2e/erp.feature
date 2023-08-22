Feature: Login
  Background:
    Given I am on the login page
  Scenario: Login with valid credentials
  
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the home page
  Scenario: Login with incorrect credentials
    When I enter incorrect credentials
    And I click the login button
    Then I should see an error message