describe ('citi bank menu selections', () => {
    it ('visit citi bank homepage', () => {
        //visit citi bank homepage
        cy.visit ('https://www.citi.com/');
        cy.wait (2000);

        //hover over banking menu
        cy.get ('[id="navbankingmainAnchor1"]').realHover();
        

        //click on checking option
        cy.get ('[id="navchkinCheckingundefined0"]').click({force: true});
        cy.wait (2000);

        //enter zip code
        cy.get ('[id="zipcode"]').type ('77598');
        cy.wait (2000);

        // click submit button
        cy.get ('[class="modal-primary-btn btnclassTest ng-star-inserted"]').eq(0).click({force: true});
        cy.wait (4000);

        //select open an account button under regular checking
        cy.get ('[aria-label="Open an Account for Regular Checking"]').click({force: true});
        cy.wait (2000);

        //capture text that says "Want to open a savings account too?" and verify it
        cy.get ('[class="x-text-header ng-tns-c2677605427-2"]').invoke ('text').then ((savingsText) => {
            expect (savingsText).to.contain ('Want to open a savings account too?');
        });//end of savings text







    })//end of test 1

})//end of describe    