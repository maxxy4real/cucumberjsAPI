@wip
Feature: Booking Service

Scenario: I can retrieve all bookings
  Given I can retrieve all bookings
  Then every booking should have a booking Id

Scenario: I can create and retrieve booking details
  Given I add a booking priced at 50 to check in on "2020-09-16" and checkout on "2020-09-20" with deposit paid
  Then I can retrieve individual booking details