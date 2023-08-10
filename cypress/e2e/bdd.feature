Feature: Login

  As a user
  I want to be able to log in to the application
  So that I can access my account

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should be redirected to the dashboard page

  Scenario: Unsuccessful login
    Given I am on the login page
    When I enter invalid credentials
    Then I should see an error message