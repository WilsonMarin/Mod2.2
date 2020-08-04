const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('//html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input') }
    get inputPassword () { return $('//html/body/div/div/div/div/div/div/form/fieldset/fieldset[3]/input') }
    get btnSubmit () { return $('//html/body/div/div/div/div/div/div/form/fieldset/button') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    clickToSummit(){
        this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
