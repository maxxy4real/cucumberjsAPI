import { httpClient } from '../tools/httpClient'
import { assert } from 'chai'

export const getBookings = async () => {
  try {
    const res = await httpClient.get('/booking')

    assert.equal(res.status, 200, `status code is ${res.status}`)
    return res.data
  } catch(err){
    throw(err)
  }  
}

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

  try {
    const res = await httpClient.post('/booking', postData);
    assert.equal(res.status, 200, `status code is ${res.status}`)
    return res.data

  } catch (err){
    throw(err)
  }
};

export const getBookingDetails = async (bookingId) => {
  try {
    const res = await httpClient.get(`/booking/${bookingId}`);

    assert.equal(res.status, 200, `status code is ${res.status}`)
    return res.data
  } catch(err){
    throw(err)
  }
};

export const deleteBooking = async (bookingId) => {
  try {
    const res = await httpClient.delete(`/booking/${bookingId}`);

    assert.equal(res.status, 201, `status code is ${res.status}`)
    return res
  } catch(err){
    throw(err)
  }
};