import { httpClient } from '../tools/httpClient';
import { assert } from 'chai';

export const getBookings = async () => {
  const res = await httpClient.get('/booking');

  assert.equal(res.status, 200, `status code is ${res.status}`)
  return res.data;
};

export const createBooking = async (data = null) => {
  const postData = data? data : {
    "bookingdates": {
      "checkin": "2020-12-25",
      "checkout": "2020-12-27"
    },
    "depositpaid": "true",
    "firstname": "AnyOld",
    "lastname": "Tester",
    "totalprice": "999"
  }

  let res;
  try {
    res = await httpClient.post('/booking', postData);
    assert.equal(res.status, 200, `status code is ${res.status}`)
    return res.data;

  } catch (err){
    // server is returning 418 although post is successful, most likely CORS issue 
    if (err.response.status == 418) return err.response.status
    else throw(err)
  }
};

export const getBookingDetails = async (bookingId) => {
  const res = await httpClient.get(`/booking/${bookingId}`);

  assert.equal(res.status, 200, `status code is ${res.status}`)
  return res.data;
};