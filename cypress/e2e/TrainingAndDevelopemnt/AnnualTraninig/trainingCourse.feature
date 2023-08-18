Feature: Job Registration
    Background:
        Given I am on the job registration page
    Scenario: Register for a job while logged in
        Given I am logged in
        When I fill in the job registration form
        And I submit the job registration form
        Then I should see a confirmation message
    Scenario: Register for a job while not logged in
        Given I am not logged in
        When I fill in the job registration form
        And I submit the job registration form
        Then I should be redirected to the login page