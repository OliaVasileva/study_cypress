export class Functions {
    static openPage(url) {
        cy.visit(url, { timeout:1000000});
    }
    
    static getElement(locator) {
        return cy.get(locator)
    }
}
