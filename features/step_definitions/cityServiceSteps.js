import { Given, Then } from 'cucumber'
import { assert } from 'chai'
import { getCityByID } from '../../api/apiRequests'


Given('a request is made to GET city with {string}', async function (id) {
  this.cityId = id
  this.cityData = await getCityByID(id)
});

Then('the http status should be {string}', async function (status) {
  assert.equal(this.cityData.status, status, `status code is ${this.cityData.status}`)
});

Then('the city_id is in the correct format', async function () {
  assert.isNumber(this.cityData.data.geoname_id)
});

Then('the city_id matches the registered city in the system', async function () {
  assert.equal(this.cityData.data.geoname_id, this.cityId, 'City ID is incorrect')
});

Then('the details for the city are returned', async function () {
  assert.isString(this.cityData.data.full_name)
  assert.isObject(this.cityData.data.location)
  assert.isNumber(this.cityData.data.population)
});

Then('I see {string} displayed', async function (text) {
  assert.equal(this.cityData.data.message, text, `status code is ${this.cityData.status}`)
});