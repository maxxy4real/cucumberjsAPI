import { Given, When, Then } from 'cucumber';
import { assert, expect } from 'chai';
import { users } from '../../data/userData/users';
import { createBooking, getBookings, getBookingDetails } from '../../api/bookingRequests';


Given('I can retrieve all bookings', async function() {
  this.bookings = await getBookings();
});

Then('every booking should have a booking Id', function () {
  if (this.bookings.length > 0){
    for(let i = 0; i < this.bookings.length; i++){
      assert.isNotNull(this.bookings[i].bookingid)
    }
  } 
  else console.log("No bookings made")
});

Given('I add a booking priced at {float} to check in on {string} and checkout on {string} with deposit {word}', async function (amount, checkInDate, checkOutDate, depositPaid) {
  let deposit
  if (depositPaid == "paid") deposit = "true"
  else deposit = "false"

  const postData = {
    bookingdates:{
      checkin: checkInDate,
      checkout: checkOutDate 
    },
    depositpaid: deposit,
    firstname: "Tester",
    lastname: "Ruban",
    totalprice: `${amount}`
  }

  this.newBooking = await createBooking(postData)
  assert.isNotNull(this.newBooking.bookingid)
});

Then('I can retrieve individual booking details', async function () {
  const booking = await getBookingDetails(this.newBooking.bookingid);
});
