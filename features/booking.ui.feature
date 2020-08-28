  Feature: Bookings

  Scenario: A user can make a booking
    Given I am on the booking page
    When I add a booking priced at 50 to check in on "2020-09-16" and checkout on "2020-09-20" with deposit paid
    Then a new booking should be displayed on the page
