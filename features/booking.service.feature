@api
Feature: Booking Service

Scenario: I can retrieve all bookings via api
  Given there are existing bookings on record
  And I can retrieve all bookings
  Then every booking should have a booking Id

Scenario: I can create a new booking via api
  Given I post a booking priced at 50 to check in on "2020-09-16" and checkout on "2020-09-20" with deposit paid
  Then the correct booking details are returned

Scenario: I can retreive booking details via api
  Given there are existing bookings on record
  And I can retrieve all bookings
  Then I can retrieve individual booking details

@wip
# potential Axios issue here with Delete method and CORS throwing 403
Scenario: I can delete a booking via api
  Given there are existing bookings on record
  And I can retrieve all bookings
  Then I can delete a booking by bookingid