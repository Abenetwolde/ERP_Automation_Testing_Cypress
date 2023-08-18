Feature: Job Registration
    Background:
        Given I am on TrainingAndDevelopemnt/AnnualTraninig trainingCourse page
    Scenario: Register for a job while logged in
        When I Click the plus Icon 
        And I Select Course Category From Dropdown 
        And I Fill Course Name 
        When I Click the save Button 
        Then I should see a success Message
