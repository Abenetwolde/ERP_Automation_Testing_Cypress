Feature: annualTrainingRequest Test

  Scenario: Updating annualTrainingApprove
    Given I am on the annualTrainingApprove page
    When I select annualTrainingApprove List Filter Criteria
    When I click department from the table
    When I Update Decision to Approve:
    When I Given Comment 
    When I Click the save button
    Then it should show the new data on the table
    When I type Participant id
    When I click Add Training Participant Button
    Then I should see the new data on Training Participant table
    When I type Participant id
    When I type Comment Given
    When I Click Update Button
    Then I should see the seccessfuly Message on top



