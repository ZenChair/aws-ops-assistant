
Feature: Version report
  As a user of AWS Ops Assistant
  I want to know the version of the assistant currently running
  So that I can see if we're using the right one

  Scenario: Getting a version number
    Given I am on slack and ready to post a command comment
    When I post "/oa Tell me your version" comment
    Then I should get a version number
