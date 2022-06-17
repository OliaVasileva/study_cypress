export class Locators {
    static generalMenu = 'nav[data-qa-type="uikit/navigation.menu"]'
    static generalMenuItems = 'a[data-qa-type="uikit/navigation.menuItem"]'
    static loansLandingPageProductItems = 'div[automation-id="loans-product"]'
   // static authNumberInput = 'input[automation-id="entry-form__form-field"]';
    static authNumberInput = '#phoneNumber';
    static authSmsInput = 'input[automation-id="otp-form__code-field"]'; // или просто '#smsCode'

    static ProductNamePanel = '[automation-id="product-name"]'
}