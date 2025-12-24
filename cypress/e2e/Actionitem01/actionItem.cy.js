describe('USPS tracking error', () => {
    it('veryfy tracking error message for invalid tracking number', () => {
    
    // Visit USPS homepage
    cy.visit('https://www.usps.com/');
    cy.wait(2000);
    //hover over quick tools tab 
    cy.get('[class="qt-nav menuheader"]').realHover();

    //click on track a package
    cy.get('[role="menuitem"]').eq(1).click();
    cy.wait(3000);
    //capture the url and verify it contains "track"
    cy.url().should('contain', 'Track');

    })//end of test 1

    it('enter invalid tracking number and verify error message', () => {
        cy.visit('https://tools.usps.com/');
        cy.wait(6000);
        //enter invalid tracking number
        cy.get('[id="tracking-input"]').type('1234567890');
        cy.wait(2000);
        //click on track button
        cy.get('[class="col-sm-2 track-btn-ctn"]').click();

        //capture the error message and verify it contains "Tracking is not available for this item."
        cy.get('[class="banner-content"]').invoke('text').then((errorMessage) => {
            expect(errorMessage).to.contain('Tracking is not available for this item.');
                
        });//end of error message
    })//end of test 2
})//end of describe

