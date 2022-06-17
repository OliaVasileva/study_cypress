export class Constant {
    static urlPage = 'https://www.tinkoff.ru/';
    static loansLandingPage = 'https://business-qa.tcsbank.ru/loans/landing';
    // static authorizePage = 'https://id-qa.tcsbank.ru/auth/step?cid=W3vc2ulxpvLU';

    static UserWithoutLoans = {
        number : '79374351899',
        smsCode : '1234'
    }

    static productNames = {
        overdraft : 'Овердрафт',
        turnover : 'Обротный кредит',
        creditLine : 'Кредитная линия',
        creditLinePledge : 'Кредитная линия под залог недвижимости',
        govPurchaseLine : 'Кредитная линия на исполнение контракта',
        leasing : 'Лизинг'
    }

    static city = 'Москва'
    static invalidRevenueLeasingForm = '100000'
    static invalidSumMessage = 'Сумма кредита не может быть больше выручки за последний квартал'
    static validRevenueLeasingForm = '999888777'
    static carModel = 'седан'
    static LeasingMessage = "Чтобы выдать кредит, «Европлан» запросит у вас лицензию"
}
