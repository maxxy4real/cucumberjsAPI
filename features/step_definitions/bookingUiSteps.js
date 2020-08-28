import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';


Given('I can reach google', function () {
    browser.url('https://google.com')
});

