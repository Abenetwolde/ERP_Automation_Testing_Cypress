Feature: trainingCourse

  Scenario: Updating trainingInstitutionProfile
    Given I am on the trainingInstitutionProfile page
    When I select Institution Name
    When I click Institution from the table
    When I update Tin Number value
    When I Click the save Button
    Then I should see the seccessfuly update pop up Message on top
  Scenario: it should not update trainingInstitutionProfile with invalid data
    Given I am on the trainingInstitutionProfile page
    When I select Institution Name
    When I click Institution from the table
    When I update Tin Number value
    When I Click the save Button
    Then The error message visibl


