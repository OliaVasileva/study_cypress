import {Functions} from '../projects/steps'
import {Constant} from '../projects/const'
import {Locators} from '../projects/locators'

describe('Тесты со страницы https://wiki.tcsbank.ru/display/SMECREDIT/Cypress', () => {
    /* beforeEach('Авторизация', () => {
        Functions.openPage(Constant.loansLandingPage);
        Functions.getElement(Locators.authNumberInput).type(`${}`)
    }) */
    it('Тест 2.1 ', () => {
        Functions.openPage(Constant.loansLandingPage);
        Functions.getElement(Locators.authNumberInput).type(`${Constant.UserWithoutLoans.number}{enter}`);
        Functions.getElement(Locators.authSmsInput).type(`${Constant.UserWithoutLoans.smsCode}`);

        //Functions.openPage(Constant.loansLandingPage);
        Functions.getElement(Locators.loansLandingPageProductItems).should('have.length', 6)
    })
})