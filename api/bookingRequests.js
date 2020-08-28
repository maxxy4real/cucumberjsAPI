import { httpClient } from '../tools/httpClient';
import { assert } from 'chai';

export const getBookings = async () => {
  const res = await httpClient.get('/booking');

  assert.equal(res.status, 200, `status code is ${res.status}`)
  return res.data;
};

export const createBooking = async (data) => {
  const jsonData = JSON.stringify(data)
  const res = await httpClient.post('/booking', {
    "bookingdates": {
      "checkin": "2020-09-16",
      "checkout": "2020-09-20"
    },
    "depositpaid": "true",
    "firstname": "Tester",
    "lastname": "Ruban",
    "totalprice": "50"
  });

  assert.equal(res.status, 200, `status code is ${res.status}`)
  return res.data;
};

export const getBookingDetails = async (bookingId) => {
  const res = await httpClient.get(`/booking/${bookingId}`);

  assert.equal(res.status, 200, `status code is ${res.status}`)
  return res.data;
};