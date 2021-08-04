Feature: Is Processing service doing well?
  Our processing service muss be well and stable

  Scenario: Processing Service must throw exception on null input
    When I call the processing service with null input
    Then I should receive an exception "Cannot handle null inputs"
