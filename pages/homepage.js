import Page from './page';

class homePage extends Page {

    get pageHeader()   { return $('.jumbotron h1'); }
    get firstName()   { return $('#firstname'); }
    get surName()     { return $('#lastname'); }
    get price()     { return $('#totalprice'); }
    get depositSelect()   { return $('#depositpaid'); }
    get checkInInput()   { return $('#checkin'); }
    get checkOutInput()   { return $('#checkout'); }
    get saveButton()     { return $('#form input[type=button]'); }
    get deleteButton()     { return $('#bookings .row input[type=button]'); }

    get bookingsList()     { return $('#bookings .row'); }


    open () {
        super.open('/')
    }

    waitForPageToLoad () {
      if(!this.pageHeader.isDisplayed()){
        this.pageHeader.waitForDisplayed(10000);
      }
    }

    enterBooking (price, checkIn, checkOut, deposit) {
      if (deposit == "paid") deposit = "true"
      else deposit = "false"

      this.firstName.setValue('Test');
      this.surName.setValue('User');
      this.price.setValue(price);
      this.depositSelect.selectByVisibleText(deposit)
      this.checkInInput.setValue(checkIn);
      this.checkOutInput.setValue(checkOut);
      // browser.pause(5000)
      this.saveButton.click();
    }

    deleteFirstBooking () {
      this.deleteButton.click();
    }

    waitForNewBookings(){
      browser.waitUntil(
        async () => await expect(browser.$$('#bookings .row').length).to.be.greaterThan(this.bookings),
        {
            timeout: 2000,
            timeoutMsg: 'expected new bookings to show up'
        }
      )
    }

    waitForLessBookings(){
      browser.waitUntil(
        async () => await expect(browser.$$('#bookings .row').length).to.be.lessThan(this.bookings),
        {
            timeout: 2000,
            timeoutMsg: 'expected less bookings to be displayed'
        }
      )
    }
}

export default new homePage()