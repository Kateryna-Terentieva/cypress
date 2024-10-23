describe('Megaknihy.cz Login', () => {
    it('should log in with valid credentials', () => {
        // Step 1: Visit the main page
        cy.visit('https://www.megaknihy.cz/');

        // Step 2: Attempt to find the cookies banner
    cy.get('.CybotCookiebotDialog, #CybotCookiebotDialog', { timeout: 10000 }) // Adjusted selector
    .should('be.visible')
    .then(() => {

      // Step 3: Click the button to accept cookies
      cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll', { timeout: 10000 }) // Adjusted selector
        .should('be.visible')
        .click();
    });

  // Step 4: Verify that the banner is no longer visible
  cy.get('.CybotCookiebotDialog, #CybotCookiebotDialog', { timeout: 10000 })
  .should('not.be.visible'); // Use not.be.visible instead of not.exist 

        // Step 5: Click the login button
        cy.get('a[href*="identita"]', { timeout: 10000 }).should('be.visible').click();
        
        // Step 6: Enter username and password
        cy.get('input[name="email"]').type('katherine.terentieva@gmail.com');
        cy.get('input[name="passwd"]').type('testtest');

        // Step 7: Submit the login form
        cy.get('button[type="submit"]').click();

        // Step 8: Assert successful login
        cy.url('https://www.megaknihy.cz/profil').should('include', '/'); // Adjust based on the actual redirect URL

        //  Step 9: Check for error messages if login fails
        cy.get('.error-message', { timeout: 10000 }).should('not.exist');
        });
    });