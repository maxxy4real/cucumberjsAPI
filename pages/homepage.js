import Page from './page';

class homePage extends Page {

    get pageHeader()   { return $('.jumbotron h1'); }
    get firstName()   { return $('#firstname'); }
    get surName()     { return $('#lastname'); }
    get price()     { return $('#totalprice'); }
    get depositSelect()   { return $('#depositpaid'); }
    get checkInInput()   { return $('#checkin'); }
    get checkInInput()   { return $('#checkout'); }
    get saveButton()     { return $('#form input[type=button]'); }

    open () {
        super.open('/')
    }

    waitForloginPageToLoad () {
      if(!this.headerImage.isDisplayed()){
        this.headerImage.waitForDisplayed(10000);
      }
    }

    login (username, password) {
      //this.waitForloginPageToLoad();
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.loginButton.click();
    }
}

export default new homePage()