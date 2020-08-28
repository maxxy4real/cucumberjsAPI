import { Given, When, Then } from 'cucumber';
import homepage from '../../pages/homepage.js';
import { createBooking } from '../../api/bookingRequests';
import { expect } from 'chai';

Given('I am on the booking page', function () {
    homepage.open()
    homepage.waitForPageToLoad()
    this.bookings = browser.$$('#bookings .row').length
});

When('I add a booking priced at {float} to check in on {string} and checkout on {string} with deposit {word}', async function (amount, checkInDate, checkOutDate, depositPaid) {
    await homepage.enterBooking(amount, checkInDate, checkOutDate, depositPaid)
});

Then('a new booking should be displayed on the page', async function () {
    browser.refresh()
    homepage.waitForNewBookings
});

When('there are existing bookings', async function () {
    if (browser.$$('#bookings .row').length < 2) {
        await createBooking()
        browser.refresh()
        homepage.waitForNewBookings
    }
});

Then('I can delete a booking', async function () {
    homepage.deleteFirstBooking()
    browser.refresh()
    homepage.waitForLessBookings
});