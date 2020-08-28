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
      this.checkInInput.setValue(checkIn);
      this.checkOutInput.setValue(checkOut);
      this.saveButton.click();
    }
}

export default new homePage()