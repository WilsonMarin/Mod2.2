const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NavigationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get conduitLabel    () { return $('/html/body/div/app-header/nav/div/a') }
    get signInLink      () { return $('/html/body/div/app-header/nav/div/ul[1]/li[2]/a') }
    get signUpLink      () { return $('//html/body/div/app-header/nav/div/ul[1]/li[3]/a') }

    goToSigning() {
        this.signInLink.click();
    }

    getConduitLabelText(){
        return this.conduitLabel.getText();
    }
    open () {
        return super.open('');
    }

}

module.exports = new NavigationPage();
