import { Given, When, Then } from 'cucumber';
import homepage from '../../pages/homepage.js';
import { expect } from 'chai';


Given('I am on the booking page', function () {
    homepage.open()
});

