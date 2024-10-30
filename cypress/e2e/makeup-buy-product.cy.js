describe('Buy Product on Makeup', () => {
    it('should buy a product', () => {
        // Step 1 - Visit the main page
        cy.visit('https://makeup.cz/', { failOnStatusCode: false });

        // Step 2: Attempt to find the cookies banner
        cy.get('.popup__window', { timeout: 10000 })
            .should('be.visible')
            .then(() => {

         // Step 3: Click the button to accept cookies
                cy.contains('Přijmout vše').should('be.visible').click();
            });

       // Step 4: Click on the main menu
       cy.get('.menu-button').should('be.visible').click();

       // Step 5: Chose 'Liceni' category
       cy.contains('Líčení').should('be.visible').click();

       // Step 6: Filter out the parameters
       cy.contains('Parametry').should('be.visible').click();

       // Step 7: Choose the brand
       cy.contains('Značka', { timeout: 10000 }).should('be.visible');

       // Step 8: Filter out "C" brand names
       cy.contains('C', { timeout: 10000 }).should('be.visible').click();

       // Step 9: Choose "Clinique" as brand name

       cy.contains('Clinique', { timeout: 10000 }).should('be.visible').click();
    
       // Step 10: Filter out product type
       cy.contains('Série').should('be.visible').click();

       // Step 11: Choose "Oci" as product type
       cy.contains('Oči').should('be.visible').click();

       // Step 12 : Confirm the brand name choise
       cy.contains('Uplatnit').should('be.visible').click();

       // Step 13: Choose the product from the list
       cy.contains('Clinique High Impact Zero Gravity Mascara').should('be.visible').click();

       // Step 14: Add the product to the cart
       cy.contains('Koupit').should('be.visible').click();

       // Step 15: Buy the product
       cy.contains('Objednat').should('be.visible').click();

       // Step 16: Proceed with the purchase with the created account
       cy.contains('Jsem pravidelný zákazník').click({ force: true });

       // Step 17: Fill out login details
       cy.get('input[name="user_login"]').type('katherina.terentieva@kiwi.com');
       cy.get('input[name="user_pw"]').type('testtest');

       // Step 18: Click the login button
       cy.contains('Přihlásit se').should('be.visible').click();

       // Step 19: Continue with the infomration confirmation
       cy.contains('Další').should('be.visible').click({ force: true });

}); 
});