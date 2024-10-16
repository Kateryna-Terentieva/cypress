describe('Megaknihy.cz Login', () => {
    it('should log in with valid credentials', () => {
        // Step 1: Visit the main page
        cy.visit('https://www.megaknihy.cz/');

       // Step 2: Wait for the cookie consent dialog to appear
       cy.get('.CybotCookiebotDialog', { timeout: 10000 }).should('be.visible');

       // Step 3: Accept cookies
       cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll', { timeout: 10000 })
         .should('be.visible') // Ensure the button is visible
         .click(); // Click the button to accept cookies

       // Step 4: Verify that the dialog is no longer visible
       cy.get('.CybotCookiebotDialog', { timeout: 10000 }).should('not.exist');
      
        // Step 3: Click the login button
        cy.get('a[href*="identita"]', { timeout: 10000 }).should('be.visible').click();
        
        // Step 4: Enter username and password
        cy.get('input[name="email"]').type('katherine.terentieva@gmail.com');
        cy.get('input[name="passwd"]').type('testtest');

        // Step 5: Submit the login form
        cy.get('button[type="submit"]').click();

        // Step 6: Assert successful login
        cy.url().should('include', '/'); // Adjust based on the actual redirect URL

        // Check for error messages if login fails
        cy.get('.error-message', { timeout: 10000 }).should('not.exist');

        // Verify the user's name appears on the page
        cy.contains('Kateryna', { timeout: 20000 }).should('be.visible');

        // Optionally log the body HTML for debugging
        cy.get('body').then((body) => {
            cy.log(body.html());
        });
    });
});