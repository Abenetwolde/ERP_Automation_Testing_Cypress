Feature: annualTrainingRequest Test

  Scenario: Updating annualTrainingRequest
    Given I am on the trainingInstitutionProfile page
    When I select Load Request List Filter Criteria
    When I click department from the table
    When I select Course Category
    When I type Number of Nominee
    When I type Number of Days
    When I type Cost/Person
    When I type Sponsered By
    When I select Location
    When I select Training Course
    When I select Institution
    When I type reason
    When I Click the add button
    Then it should show the new data on the table
    When I type Participant id
    When I click Add Training Participant Button
    Then I should see the new data on Training Participant table
    When I type Participant id
    When I type Comment Given
    When I Click Update Button
    Then I should see the seccessfuly Message on top



