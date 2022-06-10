import {Functions} from '../projects/steps'
import {Constant} from '../projects/const'
import {Locators} from '../projects/locators'

describe('Проверка главной страницы tinkoff.ru', () => {
    beforeEach(() => {
        Functions.openPage(Constant.urlPage);
    })

    it('Проверка кол-ва элементов главного меню', () => {
        Functions.getElement(Locators.generalMenu)
            .first()
            .find(Locators.generalMenuItems)
            .should('have.length', 9)
    })
})