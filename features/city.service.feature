@api
Feature: API data about a city using its ID

  Scenario: As a user I want to retrieve data about a city using its ID
    Given a request is made to GET city with '1796236'
    Then the http status should be '200'
    And the city_id is in the correct format
    And the city_id matches the registered city in the system
    And the details for the city are returned

  Scenario: As a user I want to see response code 400 when city ID is not in the correct format
    Given a request is made to GET city with '1796536DS'
    Then the http status should be '400'

  Scenario: As a user I want to see response code is 404 when city ID is not valid
    Given a request is made to GET city with '1796211'
    Then the http status should be '404'
    And I see 'City not found' displayed