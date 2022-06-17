export class Locators {
    static generalMenu = 'nav[data-qa-type="uikit/navigation.menu"]'
    static generalMenuItems = 'a[data-qa-type="uikit/navigation.menuItem"]'
    static loansLandingPageProductItems = 'div[automation-id="loans-product"]'
   // static authNumberInput = 'input[automation-id="entry-form__form-field"]';
    static authNumberInput = '#phoneNumber';
    static authSmsInput = 'input[automation-id="otp-form__code-field"]'; // или просто '#smsCode'

    static ProductNamePanel = '[automation-id="product-name"]'

    static toLoanFormLeasing = '[automation-id="to-loan-form-leasing"]'
    static inputLeasingForm = '[automation-id="tui-primitive-textfield__native-input"]'
    static citySuggestLeasingForm = '//button[text()=" г Москва "]'
    static invalidSumNotification = '[automation-id="invalid-sum-notification"]'
    static taxi = '//span[text()="Такси"]'
    static carStateRadioButtons = 'input[type="radio"]'
    static taxiCheckbox = '[automation-id="tui-checkbox__native"]'
    static leasingNotification = '[automation-id="europlan-notification"]'
}