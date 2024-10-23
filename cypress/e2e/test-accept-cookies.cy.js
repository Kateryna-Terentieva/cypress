describe('Cookies Banner Test', () => {
  it('should accept cookies', () => {
    cy.visit('https://www.megaknihy.cz/');

    // Step 1: Attempt to find the cookies banner
    cy.get('.CybotCookiebotDialog, #CybotCookiebotDialog', { timeout: 10000 }) // Adjusted selector
      .should('be.visible')
      .then(() => {
        // Step 2: Click the button to accept cookies
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll', { timeout: 10000 }) // Adjusted selector
          .should('be.visible')
          .click();
      });

    // Step 3: Verify that the banner is no longer visible
    cy.get('.CybotCookiebotDialog, #CybotCookiebotDialog', { timeout: 10000 })
    .should('not.be.visible'); // Use not.be.visible instead of not.exist
  });
});