Feature: trainingInstitutionProfile

  Scenario: Updating trainingInstitutionProfile
    Given I am on the trainingInstitutionProfile page
    When I select Institution Name
    When I click Institution from the table
    When I update Tin Number value
    When I Click the update Button
    Then I should see the seccessfuly Message on top
  Scenario: it should not update trainingInstitutionProfile with invalid data
    Given I am on the trainingInstitutionProfile page
    When I select Institution Name
    When I click Institution from the table
    When I update Tin Number value
    When I Click the Uupdate Button
    Then The error message visibl


