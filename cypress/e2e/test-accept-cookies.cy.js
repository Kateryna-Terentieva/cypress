describe('Megaknihy.cz Cookie Consent', () => {
    it('should accept cookies', () => {
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
    });
});