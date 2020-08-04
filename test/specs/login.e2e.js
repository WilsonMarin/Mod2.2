const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');

const NavigationPageConst =  require('../pageobjects/navigation.page')

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        
        NavigationPageConst.open();
        NavigationPageConst.goToSigning();
        console.log(NavigationPageConst.getConduitLabelText());
        LoginPage.login("UserName", "Password");
        LoginPage.clickToSummit();

    });
});


