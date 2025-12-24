//initialize the variable to call it in test 2
let currentUrl;

//describe suite represents what module/functionality is being tested
describe('Brave Search Functionality', () => {

    it('Search for a keyword and verify the search url contains the keyword', () => {
        // Visit Brave Search homepage
        cy.visit('https://search.brave.com/');

        // type cypress testing in your search field and submit
        cy.get('[id="searchbox"]').type('Cypress testing{enter}');

        // capture the current url and verify it contains Cypress+testing
        cy.url().should('contain', 'Cypress+testing');
        cy.wait(2000);

        cy.get('[id=llm-show-more-button]').click();

        // verify the text contains Cypress is a modern, open-source end-to-end (E2E) testing framework
        cy.get('[id=results]').invoke('text').then((results) => {
            expect(results).to.contain('Cypress is a modern, open-source end-to-end (E2E) testing framework');
        }); // end of workflow
    }); // end of test 

}); // end of describe suite

