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

    it('Тест 2.2', () => {
        Functions.openPage(Constant.loansLandingPage);
        Functions.getElement(Locators.authNumberInput).type(`${Constant.UserWithoutLoans.number}{enter}`);
        Functions.getElement(Locators.authSmsInput).type(`${Constant.UserWithoutLoans.smsCode}`);

        Functions.getElement(Locators.ProductNamePanel).contains(`${Constant.productNames.overdraft}`).should('exist');
        Functions.getElement(Locators.ProductNamePanel).contains(`${Constant.productNames.turnover}`).should('exist');
        Functions.getElement(Locators.ProductNamePanel).contains(`${Constant.productNames.creditLine}`).should('exist');
        Functions.getElement(Locators.ProductNamePanel).contains(`${Constant.productNames.creditLinePledge}`).should('exist');
        Functions.getElement(Locators.ProductNamePanel).contains(`${Constant.productNames.govPurchaseLine}`).should('exist');
        Functions.getElement(Locators.ProductNamePanel).contains(`${Constant.productNames.leasing}`).should('exist');
    })

    it.only('Тест 2.3', () => {
        // пп.1-3 : авторизация
        Functions.openPage(Constant.loansLandingPage);
        Functions.getElement(Locators.authNumberInput).type(`${Constant.UserWithoutLoans.number}{enter}`);
        Functions.getElement(Locators.authSmsInput).type(`${Constant.UserWithoutLoans.smsCode}`);

        // п.4 : найти кнопку "Оформить" на плашке Лизинга на разводящей
        Functions.getElement(Locators.toLoanFormLeasing).click();

        // п.5(1) : найти кнопку ввода города и ввести Москва
        Functions.getElement(Locators.inputLeasingForm).type(`${Constant.city}`);

        // п.5(2) : найти кнопку в выпадающем списке с подсказкой города и нажать
        Functions.getElement(Locators.citySuggestLeasingForm).click();

        // п.6 : найти кнопку для ввода выручки и ввести значение
        Functions.getElement(Locators.inputLeasingForm).next().type(`${Constant.invalidRevenueLeasingForm}`);

        // п.7 : проверить, что есть  желтая нотифтикация
        // п.8 : Проверить что в нотификации текст "Сумма кредита не может быть больше выручки за последний квартал"
        Functions.getElement(Locators.invalidSumNotification).should('exist')
            .find("span").should('have.text', `${Constant.invalidSumMessage}`);

        // п.9 : Удалить сумму из поля выручки
        Functions.getElement(Locators.inputLeasingForm).next().clear();

        // п.10 : Ввести сумму в поле выручки 999888777
        Functions.getElement(Locators.inputLeasingForm).next().type(`${Constant.validRevenueLeasingForm}`);

        // п.11 : Выбрать "Тип авто" - Такси
        Functions.getElement(Locators.inputLeasingForm).last().click();
        Functions.getElement(Locators.taxi).parents('button').click();

        // п.12 : Заполнить марку = седан
        Functions.getElement(Locators.inputLeasingForm).last().type(`${Constant.carModel}`);

        // п.13 : Выбрать Б/У
        Functions.getElement(Locators.carStateRadioButtons).last().click();

        // п.14 : Поставить галочку "Авто будет работать в такси"
        Functions.getElement(Locators.taxiCheckbox).click();

        // п.15 : Проверить, что появилась синяя нотификация
        // п.16 : Проверить что текст в нотификации = "Чтобы выдать кредит, «Европлан» запросит у вас лицензию"
        Functions.getElement(Locators.leasingNotification).should('exist')
            .find("span").should('have.text', `${Constant.LeasingMessage}`);
    })
})