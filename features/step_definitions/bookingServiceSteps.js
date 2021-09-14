import { Given, Then } from 'cucumber'
import { assert } from 'chai'
import { createBooking, getBookings, getBookingDetails, deleteBooking } from '../../api/bookingRequests'


Given('I can retrieve all bookings', async function() {
  this.bookings = await getBookings()
});

Then('every booking should have a booking Id', function () {
  if (this.bookings.length > 0){
    for(let i = 0; i < this.bookings.length; i++){
      assert.isNumber(this.bookings[i].bookingid)
    }
  } 
  else console.log("No bookings made")
});

Given('I post a booking priced at {float} to check in on {string} and checkout on {string} with deposit {word}', async function (amount, checkInDate, checkOutDate, depositPaid) {
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
});

Then('the correct booking details are returned', function () {
  assert.isNotNull(this.newBooking.bookingid)
  checkBookingData(this.newBooking.booking)
});

Then('I can retrieve individual booking details', async function () {
  const bookingId = this.bookings[0].bookingid
  let data = await getBookingDetails(bookingId)
  checkBookingData(data)
});

Then('I can delete a booking by bookingid', async function () {
  const bookingId = this.bookings[0].bookingid
  console.log(bookingId)
  let x = await deleteBooking(bookingId)
  console.log(x)
});

Given('there are existing bookings on record', async function () {
  await createBooking()
});

function checkBookingData(data) {
  assert.isString(data.firstname)
  assert.isString(data.lastname)
  assert.isNumber(data.totalprice)
  assert.isBoolean(data.depositpaid)
  assert.isObject(data.bookingdates)
};
