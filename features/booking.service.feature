@wip
Feature: Booking Service

Scenario: I can retrieve all bookings via api
  Given I can retrieve all bookings
  Then every booking should have a booking Id

Scenario: I can create a new booking via api
  Given I post a booking priced at 50 to check in on "2020-09-16" and checkout on "2020-09-20" with deposit paid

Scenario: I can retreive booking details via api
  Given I can retrieve all bookings
  Then I can retrieve individual booking details